'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Review } from '@/types';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-3xl p-5 card-shadow border border-gray-50">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-[#C8102E] to-[#a00d24] rounded-full flex items-center justify-center text-white font-bold text-sm">
          {review.avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
          <p className="text-gray-400 text-xs">{review.date}</p>
        </div>
        <div className="ml-auto flex">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-[#D4AF37]" fill="#D4AF37" />
          ))}
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{review.comment}</p>
      <div className="mt-3 flex items-center gap-1">
        <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="text-xs text-gray-400">Google Review</span>
      </div>
    </div>
  );
}
