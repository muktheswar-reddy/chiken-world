'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import ReviewCard from '@/components/ui/ReviewCard';
import { reviews } from '@/data';

export default function GoogleReviewsSection() {
  const avgRating = 5.0;
  const reviewCount = 127;

  return (
    <section id="reviews" className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">Customer Love</span>
          <h2 className="section-title mt-2">Google Reviews</h2>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 mt-6 card-shadow border border-gray-100">
            <div className="text-center">
              <p className="text-4xl font-black text-gray-900" style={{ fontFamily: 'Poppins' }}>
                {avgRating.toFixed(1)}
              </p>
              <div className="flex items-center gap-0.5 mt-1 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF37]" fill="#D4AF37" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-left">
              <p className="text-gray-900 font-bold text-lg">{reviewCount}+ Reviews</p>
              <p className="text-gray-500 text-sm">on Google Business</p>
              <div className="flex items-center gap-1 mt-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs text-gray-500">Verified Google Reviews</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marquee Reviews */}
        <div className="overflow-hidden -mx-4">
          <div className="marquee-track">
            {[...reviews, ...reviews].map((review, i) => (
              <div key={`${review.id}-${i}`} className="mx-3">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://www.google.com/search?q=CHIKEN+WORLD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary text-sm px-6 py-3"
          >
            View All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
