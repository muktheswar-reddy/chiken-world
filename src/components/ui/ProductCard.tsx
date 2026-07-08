'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Zap } from 'lucide-react';
import BookingDialog from './BookingDialog';
import type { Product, WeightOption } from '@/types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

// Emoji fallback background colors per category
const categoryColors: Record<string, string> = {
  'country-chicken': 'from-amber-50 to-orange-50',
  'broiler-chicken': 'from-red-50 to-rose-50',
  boneless: 'from-pink-50 to-red-50',
  breast: 'from-rose-50 to-red-50',
  wings: 'from-orange-50 to-amber-50',
  drumsticks: 'from-red-50 to-orange-50',
  'leg-pieces': 'from-rose-50 to-pink-50',
  liver: 'from-red-100 to-rose-50',
  gizzard: 'from-amber-50 to-yellow-50',
  mince: 'from-red-50 to-rose-100',
  keema: 'from-orange-50 to-red-50',
  'biryani-cut': 'from-yellow-50 to-amber-50',
  'curry-cut': 'from-red-50 to-orange-50',
  skinless: 'from-pink-50 to-rose-50',
  'with-skin': 'from-amber-100 to-orange-50',
  lollipop: 'from-red-50 to-pink-50',
  sausage: 'from-rose-50 to-red-50',
  nuggets: 'from-yellow-50 to-amber-50',
  popcorn: 'from-amber-50 to-yellow-100',
  pickle: 'from-orange-50 to-amber-50',
  'fresh-eggs': 'from-yellow-50 to-amber-50',
  'country-eggs': 'from-amber-50 to-orange-50',
  'brown-eggs': 'from-orange-100 to-amber-100',
};

const categoryEmojis: Record<string, string> = {
  'country-chicken': '🐓', 'broiler-chicken': '🍗', boneless: '🥩',
  breast: '🥗', wings: '🍖', drumsticks: '🍗', 'leg-pieces': '🦵',
  liver: '❤️', gizzard: '🫀', mince: '🥩', keema: '🥣',
  'biryani-cut': '🍛', 'curry-cut': '🍲', skinless: '🍽️',
  'with-skin': '🍗', lollipop: '🍡', sausage: '🌭', nuggets: '🍟',
  popcorn: '🍿', pickle: '🫙', 'fresh-eggs': '🥚', 'country-eggs': '🥚',
  'brown-eggs': '🟤',
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState<WeightOption>(product.weightOptions[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const bgClass = categoryColors[product.category] || 'from-gray-50 to-gray-100';
  const emoji = categoryEmojis[product.category] || '🍗';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
        whileHover={{ y: -6 }}
        className="bg-white rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col group"
      >
        {/* Image */}
        <div className={`relative h-44 bg-gradient-to-br ${bgClass} overflow-hidden`}>
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-1.5 z-10">
            {product.isFresh && (
              <span className="badge-fresh flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Fresh Today
              </span>
            )}
            {product.isPremium && (
              <span className="badge-premium flex items-center gap-1">
                <Star className="w-3 h-3" />
                Premium
              </span>
            )}
          </div>

          {imgError ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                {emoji}
              </span>
            </div>
          ) : (
            <Image
              src={product.image}
              alt={product.nameEn}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={() => setImgError(true)}
            />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Names */}
          <div className="mb-3">
            <h3 className="font-bold text-gray-900 text-base leading-tight" style={{ fontFamily: 'Poppins' }}>
              {product.nameEn}
            </h3>
            <p className="text-[#C8102E] text-sm font-medium mt-0.5">{product.nameKn}</p>
            {product.description && (
              <p className="text-gray-400 text-xs mt-1 line-clamp-2">{product.description}</p>
            )}
          </div>

          {/* Weight Options */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.weightOptions.map((opt) => (
              <button
                key={opt.weight}
                onClick={() => setSelectedWeight(opt)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  selectedWeight.weight === opt.weight
                    ? 'bg-[#C8102E] text-white border-[#C8102E]'
                    : 'border-gray-200 text-gray-600 hover:border-[#C8102E] hover:text-[#C8102E]'
                }`}
              >
                {opt.weight}
              </button>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xl font-black text-gray-900">₹{selectedWeight.price}</span>
              <span className="text-gray-400 text-xs ml-1">/ {selectedWeight.weight}</span>
            </div>
            <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
              In Stock
            </span>
          </div>

          {/* Book Button */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="mt-auto btn-whatsapp justify-center py-3 text-sm font-semibold rounded-2xl w-full"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.822L.057 23.492a.5.5 0 0 0 .614.656l5.832-1.53A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.66-.523-5.166-1.432l-.367-.22-3.802.998 1.017-3.712-.239-.376A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Book on WhatsApp
          </button>
        </div>
      </motion.div>

      <BookingDialog
        product={product}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        selectedWeight={selectedWeight}
      />
    </>
  );
}
