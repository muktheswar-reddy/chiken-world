'use client';

import { motion } from 'framer-motion';

const reasons = [
  { icon: '🌾', title: 'Farm Fresh', titleKn: 'ತಾಜಾ ಕ್ಷೇತ್ರ', desc: 'Sourced directly from trusted farms for the freshest quality every day.' },
  { icon: '✅', title: '100% Hygienic', titleKn: '೧೦೦% ಶುಚಿ', desc: 'Processed in a clean, sanitized environment with strict hygiene standards.' },
  { icon: '📅', title: 'Daily Fresh Stock', titleKn: 'ದೈನಂದಿನ ತಾಜಾ ಸ್ಟಾಕ್', desc: 'Fresh chicken arrives every morning — no frozen or stale products, ever.' },
  { icon: '🏆', title: 'Premium Quality', titleKn: 'ಪ್ರಿಮಿಯಂ ಗುಣಮಟ್ಟ', desc: 'We select only the finest cuts to ensure you get top-tier quality.' },
  { icon: '🐓', title: 'Country Chicken', titleKn: 'ನಾಡು ಕೋಳಿ', desc: 'Authentic, free-range country chicken with richer flavor and nutrition.' },
  { icon: '🍗', title: 'Broiler Chicken', titleKn: 'ಬ್ರಾಯ್ಲರ್ ಕೋಳಿ', desc: 'Tender, fresh broiler chicken available in all cuts and portions.' },
  { icon: '🥚', title: 'Fresh Eggs', titleKn: 'ತಾಜಾ ಮೊಟ್ಟೆ', desc: 'Farm-fresh country and broiler eggs — protein-rich and delivered daily.' },
  { icon: '😊', title: 'Best Service', titleKn: 'ಉತ್ತಮ ಸೇವೆ', desc: 'Friendly, helpful staff dedicated to making your experience excellent.' },
  { icon: '💰', title: 'Affordable Prices', titleKn: 'ಕೈಗೆಟಕುವ ಬೆಲೆ', desc: 'Premium quality at fair, competitive prices for every household.' },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">Our Promise</span>
          <h2 className="section-title mt-2">Why Choose CHIKEN WORLD?</h2>
          <p className="section-subtitle mt-3">
            We are committed to delivering freshness, hygiene, and quality with every order
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 card-shadow hover:card-shadow-hover hover:border-red-100 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-0.5" style={{ fontFamily: 'Poppins' }}>
                {r.title}
              </h3>
              <p className="text-[#C8102E] text-xs font-medium mb-2">{r.titleKn}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-[#C8102E] to-[#8B0000] rounded-3xl p-8 text-white text-center"
        >
          <p className="text-3xl mb-3">🏪</p>
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins' }}>
            Visit Us & Experience the Difference
          </h3>
          <p className="text-red-200 mb-5">
            Come see our clean shop, meet our friendly staff, and pick up your fresh order today!
          </p>
          <button
            onClick={() => document.getElementById('visit-store')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#C8102E] font-bold px-8 py-3 rounded-full hover:bg-red-50 transition-colors"
          >
            Find Us on the Map →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
