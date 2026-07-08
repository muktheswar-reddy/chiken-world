'use client';

import { motion } from 'framer-motion';
import type { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export default function CategoryCard({ category, isActive, onClick, index }: CategoryCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative flex-shrink-0 w-32 sm:w-36 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
        isActive
          ? 'bg-[#C8102E] border-[#C8102E] text-white shadow-lg shadow-red-200'
          : 'bg-white border-gray-100 text-gray-700 hover:border-[#C8102E]/40 hover:bg-red-50 card-shadow'
      }`}
    >
      <span className="text-3xl">{category.icon}</span>
      <div className="text-center">
        <p className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-gray-900'}`}>
          {category.nameEn}
        </p>
        <p className={`text-[10px] mt-0.5 ${isActive ? 'text-red-200' : 'text-[#C8102E]'}`}>
          {category.nameKn}
        </p>
      </div>
      {isActive && (
        <motion.div
          layoutId="category-indicator"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#D4AF37] rounded-full"
        />
      )}
    </motion.button>
  );
}
