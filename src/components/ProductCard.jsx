import React from 'react';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion } from 'framer-motion';
import RatingStars from './RatingStars';

const ProductCard = ({ product, onQuickView }) => {
  const { toggleWishlist, isInWishlist } = useShop();
  const liked = isInWishlist(product.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl bg-neutral-900 border border-neutral-800/80 overflow-hidden flex flex-col h-full card-tilt"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-none">
        {product.isNew && (
          <span className="px-3.5 py-1 text-[10px] font-black uppercase tracking-wider bg-white text-black rounded-full shadow-lg">
            New
          </span>
        )}
        {product.isSale && (
          <span className="px-3.5 py-1 text-[10px] font-black uppercase tracking-wider bg-brand-primary text-white rounded-full shadow-lg">
            Sale
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product);
        }}
        className="absolute top-4 right-4 z-10 p-2.5 bg-black/40 hover:bg-neutral-800 rounded-full text-white border border-neutral-800/50 backdrop-blur-md transition-all active:scale-90"
        aria-label="Add to Wishlist"
      >
        <Heart
          size={18}
          className={`transition-colors duration-300 ${liked ? 'fill-brand-primary text-brand-primary' : 'text-neutral-300'}`}
        />
      </button>

      {/* Image Area */}
      <div className="relative aspect-square w-full bg-neutral-950 overflow-hidden flex items-center justify-center p-6 border-b border-neutral-800/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out select-none"
        />
        
        {/* Hover overlay controls */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <button
            onClick={() => onQuickView(product)}
            className="p-3.5 bg-white text-black hover:bg-neutral-200 rounded-full font-semibold flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all"
            title="Quick View"
          >
            <Eye size={20} />
          </button>
          <button
            onClick={() => onQuickView(product)}
            className="p-3.5 bg-brand-primary text-white hover:bg-red-600 rounded-full font-semibold flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all"
            title="Select Options & Add to Cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-5 flex-1 flex flex-col">
        <span className="text-[11px] font-black uppercase text-neutral-500 tracking-widest mb-1.5">
          {product.brand}
        </span>
        <h3 className="font-bold text-base text-white tracking-tight leading-snug truncate group-hover:text-brand-primary transition-colors mb-2">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="mb-4">
          <RatingStars rating={product.rating} reviews={product.reviews} size={14} />
        </div>

        {/* Bottom row: Pricing */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-white">${product.price}</span>
            {product.isSale && product.oldPrice > 0 && (
              <span className="text-xs text-neutral-500 line-through font-medium">${product.oldPrice}</span>
            )}
          </div>
          <button
            onClick={() => onQuickView(product)}
            className="text-[11px] font-black uppercase text-neutral-400 hover:text-white transition-colors tracking-widest flex items-center gap-1 group/btn"
          >
            Details
            <motion.span className="inline-block transform group-hover/btn:translate-x-1 transition-transform">
              →
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
