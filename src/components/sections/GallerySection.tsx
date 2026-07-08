'use client';

import { motion } from 'framer-motion';

const galleryItems = [
  { emoji: '🐓', label: 'Country Chicken', color: 'from-amber-100 to-orange-100' },
  { emoji: '🍗', label: 'Fresh Cuts', color: 'from-red-100 to-rose-100' },
  { emoji: '🥩', label: 'Boneless Chicken', color: 'from-pink-100 to-red-100' },
  { emoji: '🥚', label: 'Farm Fresh Eggs', color: 'from-yellow-100 to-amber-100' },
  { emoji: '🍛', label: 'Biryani Cut', color: 'from-orange-100 to-amber-100' },
  { emoji: '🧹', label: 'Clean Store', color: 'from-blue-50 to-indigo-50' },
  { emoji: '😊', label: 'Happy Staff', color: 'from-green-50 to-emerald-50' },
  { emoji: '🏪', label: 'Our Shop', color: 'from-gray-50 to-slate-100' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">Our Gallery</span>
          <h2 className="section-title mt-2">A Glimpse of CHIKEN WORLD</h2>
          <p className="section-subtitle mt-3">
            Step inside our premium chicken shop — clean, fresh, and ready to serve you
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group bg-gradient-to-br ${item.color} ${
                i === 0 || i === 5 ? 'md:row-span-2' : ''
              }`}
              style={{ minHeight: i === 0 || i === 5 ? 320 : 160 }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-3">
                <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
                  <p className="text-gray-800 font-semibold text-xs text-center">{item.label}</p>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#C8102E]/0 group-hover:bg-[#C8102E]/10 transition-colors duration-300 rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
