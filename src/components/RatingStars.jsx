import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const RatingStars = ({ rating, reviews, size = 16, showCount = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center text-amber-500">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} size={size} fill="currentColor" strokeWidth={0} />
        ))}
        {hasHalfStar && (
          <div className="relative" style={{ width: size, height: size }}>
            <Star className="absolute top-0 left-0 text-neutral-600" size={size} strokeWidth={1.5} />
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
              <Star size={size} fill="currentColor" strokeWidth={0} />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-neutral-600" strokeWidth={1.5} />
        ))}
      </div>
      {showCount && reviews !== undefined && (
        <span className="text-xs text-neutral-400 font-medium ml-1">({reviews})</span>
      )}
    </div>
  );
};

export default RatingStars;
