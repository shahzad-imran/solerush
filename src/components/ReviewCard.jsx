import React from 'react';
import RatingStars from './RatingStars';
import { Quote } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800/80 rounded-3xl p-6 relative flex flex-col justify-between h-full hover:border-neutral-700/80 transition-colors">
      <Quote size={28} className="absolute right-6 top-6 text-neutral-800" />
      
      <div className="space-y-4">
        {/* Stars */}
        <RatingStars rating={review.rating} showCount={false} size={14} />

        {/* Text content */}
        <p className="text-neutral-300 text-sm leading-relaxed italic">
          "{review.comment}"
        </p>
      </div>

      {/* User profile details */}
      <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-neutral-800/60">
        <div className="w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-black flex items-center justify-center text-sm uppercase">
          {review.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="text-sm font-bold text-white leading-tight">{review.name}</h4>
          <span className="text-[10px] text-green-500 font-semibold tracking-wider uppercase block">
            Verified Purchase
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
