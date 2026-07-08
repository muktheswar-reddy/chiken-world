'use client';

import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years of Service', icon: Award },
  { value: '1000+', label: 'Happy Customers', icon: Users },
  { value: '25+', label: 'Product Varieties', icon: Heart },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="section-title mt-2 mb-6">
              About <span className="text-gradient-red">CHIKEN WORLD</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Welcome to <strong className="text-gray-900">CHIKEN WORLD</strong> — your trusted neighborhood 
                destination for the freshest chicken and eggs. We are a premium local chicken shop 
                that believes every family deserves the highest quality fresh poultry products.
              </p>
              <p>
                From farm-fresh <strong className="text-[#C8102E]">Country Chicken</strong> raised the traditional way, 
                to tender <strong className="text-[#C8102E]">Broiler Chicken</strong> in every cut imaginable — we source 
                directly from trusted farms and process each order with the utmost care and hygiene.
              </p>
              <p>
                Our mission is simple: <em>fresh chicken, every day, for every family.</em> Whether you need 
                a quick curry cut, boneless pieces for a special recipe, or farm-fresh eggs for your morning 
                breakfast — CHIKEN WORLD has you covered.
              </p>
              <p>
                We believe in <strong>transparency, freshness, and customer satisfaction</strong> above everything. 
                That&apos;s why we don&apos;t sell frozen products, we don&apos;t cut corners on hygiene, and we always 
                greet every customer with a smile.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Fresh Daily', 'Hygienically Processed', 'Local & Trusted', 'Premium Quality'].map((v) => (
                <span key={v} className="flex items-center gap-1.5 text-sm font-semibold text-[#C8102E] bg-red-50 border border-red-100 rounded-full px-4 py-2">
                  <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                  {v}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Big display card */}
            <div className="bg-gradient-to-br from-[#C8102E] to-[#8B0000] rounded-3xl p-8 text-white">
              <p className="text-6xl mb-4">🏪</p>
              <h3 className="text-2xl font-black mb-2" style={{ fontFamily: 'Poppins' }}>
                CHIKEN WORLD
              </h3>
              <p className="text-red-200 font-medium mb-1">Premium Fresh Chicken & Eggs</p>
              <p className="text-red-300 text-sm">
                ಪ್ರೀಮಿಯಂ ತಾಜಾ ಚಿಕನ್ ಮತ್ತು ಮೊಟ್ಟೆ
              </p>
              <div className="mt-5 pt-5 border-t border-white/20 flex gap-6">
                <div>
                  <p className="text-2xl font-black">100%</p>
                  <p className="text-red-200 text-xs">Fresh Daily</p>
                </div>
                <div>
                  <p className="text-2xl font-black">0%</p>
                  <p className="text-red-200 text-xs">Frozen Products</p>
                </div>
                <div>
                  <p className="text-2xl font-black">∞</p>
                  <p className="text-red-200 text-xs">Customer Care</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="bg-white rounded-2xl p-4 text-center card-shadow border border-gray-50">
                  <Icon className="w-5 h-5 text-[#C8102E] mx-auto mb-2" />
                  <p className="text-2xl font-black text-gray-900" style={{ fontFamily: 'Poppins' }}>{value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
