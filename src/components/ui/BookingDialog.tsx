'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, User, Phone, ShoppingBag, Weight } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import type { Product, WeightOption } from '@/types';

const schema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  phoneNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  quantity: z.number().min(1).max(20),
});

type FormData = z.infer<typeof schema>;

interface BookingDialogProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  selectedWeight: WeightOption;
}

export default function BookingDialog({
  product,
  isOpen,
  onClose,
  selectedWeight,
}: BookingDialogProps) {
  const [quantity, setQuantity] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { quantity: 1 },
  });

  const onSubmit = (data: FormData) => {
    openWhatsApp({
      productName: product.nameEn,
      weight: selectedWeight.weight,
      quantity: quantity,
      customerName: data.customerName,
      phoneNumber: data.phoneNumber,
    });
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    setQuantity(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Dialog */}
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.97 }}
              transition={{ type: 'spring', damping: 28, stiffness: 400 }}
              className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#C8102E] to-[#a00d24] p-5 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-red-200 uppercase tracking-wider mb-1">
                      Reserve via WhatsApp
                    </p>
                    <h3 className="text-lg font-bold leading-tight">{product.nameEn}</h3>
                    <p className="text-red-200 text-sm mt-0.5">{product.nameKn}</p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Order Summary */}
                <div className="mt-4 bg-white/10 rounded-2xl p-3 flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-xs text-red-200">Weight</p>
                    <p className="font-bold">{selectedWeight.weight}</p>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <p className="text-xs text-red-200">Price</p>
                    <p className="font-bold">₹{selectedWeight.price}</p>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <p className="text-xs text-red-200">Qty × Total</p>
                    <p className="font-bold">
                      {quantity} × ₹{selectedWeight.price * quantity}
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
                <p className="text-sm text-gray-500 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                  <span className="text-lg">ℹ️</span>
                  <span>Fill your details. We&apos;ll open WhatsApp with a pre-filled message. <strong>Collect at store.</strong></span>
                </p>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 font-bold text-gray-700 hover:border-[#C8102E] hover:text-[#C8102E] transition-colors flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(20, quantity + 1))}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 font-bold text-gray-700 hover:border-[#C8102E] hover:text-[#C8102E] transition-colors flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register('customerName')}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all"
                    />
                  </div>
                  {errors.customerName && (
                    <p className="text-xs text-red-500 mt-1">{errors.customerName.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register('phoneNumber')}
                      placeholder="10-digit mobile number"
                      type="tel"
                      maxLength={10}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-500 mt-1">{errors.phoneNumber.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-whatsapp justify-center py-4 text-base font-bold rounded-2xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.822L.057 23.492a.5.5 0 0 0 .614.656l5.832-1.53A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.66-.523-5.166-1.432l-.367-.22-3.802.998 1.017-3.712-.239-.376A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Send Reservation on WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
