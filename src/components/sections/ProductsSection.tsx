'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products, categories } from '@/data';

interface ProductsSectionProps {
  activeCategory: string | null;
}

export default function ProductsSection({ activeCategory }: ProductsSectionProps) {
  const filtered = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activeCategoryName = activeCategory
    ? categories.find((c) => c.id === activeCategory)?.nameEn
    : 'All Products';

  return (
    <section id="products" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8 flex-wrap gap-4"
        >
          <div>
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
              Reserve via WhatsApp
            </span>
            <h2 className="section-title mt-1">{activeCategoryName}</h2>
            <p className="text-gray-500 text-sm mt-1">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''} available
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex items-center gap-2">
            <span className="text-amber-600">ℹ️</span>
            <p className="text-amber-700 text-xs font-medium">
              Click <strong>"Book on WhatsApp"</strong> to reserve & collect in store
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🍽️</p>
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
