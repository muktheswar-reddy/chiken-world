'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryCard from '@/components/ui/CategoryCard';
import { categories } from '@/data';

interface CategoriesSectionProps {
  activeCategory: string | null;
  onCategoryChange: (id: string | null) => void;
}

export default function CategoriesSection({
  activeCategory,
  onCategoryChange,
}: CategoriesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -240 : 240, behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">Our Products</span>
          <h2 className="section-title mt-2">Shop by Category</h2>
          <p className="section-subtitle mt-3">
            From tender country chicken to farm-fresh eggs — discover all our premium cuts
          </p>
        </motion.div>

        {/* Scroll Controls */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hidden sm:flex"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto no-scrollbar pb-4 pt-2 px-1"
          >
            {/* All button */}
            <motion.button
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onCategoryChange(null)}
              className={`flex-shrink-0 w-24 sm:w-28 flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300 ${
                activeCategory === null
                  ? 'bg-[#C8102E] border-[#C8102E] text-white shadow-lg shadow-red-200'
                  : 'bg-white border-gray-100 text-gray-700 hover:border-[#C8102E]/40 card-shadow'
              }`}
            >
              <span className="text-2xl">🍽️</span>
              <p className={`text-xs font-bold ${activeCategory === null ? 'text-white' : 'text-gray-900'}`}>
                All Items
              </p>
            </motion.button>

            {categories.map((cat, i) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                isActive={activeCategory === cat.id}
                onClick={() => onCategoryChange(activeCategory === cat.id ? null : cat.id)}
                index={i}
              />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hidden sm:flex"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
