'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { Offer } from '@/types';

interface OfferCardProps {
  offer: Offer;
  index: number;
}

const typeIcons: Record<string, string> = {
  weekly: '📅',
  festival: '🎉',
  family: '👨‍👩‍👧‍👦',
  bulk: '📦',
  visit: '🏪',
};

export default function OfferCard({ offer, index }: OfferCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`flex-shrink-0 w-72 sm:w-80 rounded-3xl overflow-hidden bg-gradient-to-br ${offer.color} p-6 text-white card-shadow cursor-default`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-white/70">
            {typeIcons[offer.type]} {offer.badge}
          </span>
          <h3 className="text-xl font-bold mt-1 leading-tight" style={{ fontFamily: 'Poppins' }}>
            {offer.title}
          </h3>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2 text-center shrink-0 ml-3">
          <p className="text-white font-black text-lg leading-none">{offer.discount}</p>
        </div>
      </div>

      <p className="text-white/80 text-sm leading-relaxed mb-5">{offer.description}</p>

      <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-2.5 w-fit cursor-pointer">
        <span className="text-sm font-semibold">Claim Offer in Store</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
}
