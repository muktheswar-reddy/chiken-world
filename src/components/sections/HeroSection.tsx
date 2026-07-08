'use client';

import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { openWhatsAppChat, openDirections } from '@/lib/whatsapp';

const tags = [
  'Fresh', 'Hygienically Processed', 'Farm Fresh',
  'Country Chicken', 'Broiler Chicken', 'Fresh Eggs',
];

export default function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToStore = () => {
    document.getElementById('visit-store')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0208 0%, #3d0512 30%, #C8102E 70%, #8B0000 100%)',
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8102E]/20 rounded-full blur-3xl" />
        {/* Decorative circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 -left-10 w-60 h-60 border border-[#D4AF37]/10 rounded-full"
        />
      </div>

      {/* Large Emoji Decoration */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 text-[180px] md:text-[260px] opacity-10 select-none pointer-events-none"
      >
        🍗
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Premium Fresh Chicken Shop</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Premium Fresh
            <br />
            <span className="text-gradient-gold">Chicken</span> Delivered
            <br />
            to Quality Standards
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/70 text-lg mb-6 max-w-xl"
          >
            Hygienically processed, farm-fresh chicken & eggs — reserved via WhatsApp, collected in store.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.06 }}
                className="bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={scrollToProducts}
              className="btn-primary text-base px-8 py-4 shadow-xl shadow-red-900/40"
            >
              Browse Products
            </button>
            <button
              onClick={scrollToStore}
              className="flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4" />
              Visit Store
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center gap-8"
          >
            {[
              { value: '25+', label: 'Varieties' },
              { value: '100%', label: 'Fresh Daily' },
              { value: '1000+', label: 'Happy Customers' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins' }}>
                  {value}
                </p>
                <p className="text-white/60 text-xs">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
