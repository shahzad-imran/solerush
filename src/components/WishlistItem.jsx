import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const WishlistItem = ({ product, onQuickView }) => {
  const { toggleWishlist } = useShop();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-3xl bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700/80 transition-colors"
    >
      {/* Product Image and info */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-2xl bg-neutral-950 border border-neutral-850 shrink-0"
        />
        <div>
          <Link to={`/product/${product.id}`} className="block text-base font-bold text-white hover:text-brand-primary">
            {product.name}
          </Link>
          <span className="text-xs text-neutral-500 uppercase font-bold tracking-wider">{product.brand}</span>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-base font-black text-brand-primary">${product.price}</span>
            {product.isSale && product.oldPrice > 0 && (
              <span className="text-xs text-neutral-500 line-through font-semibold">${product.oldPrice}</span>
            )}
          </div>
        </div>
      </div>

      {/* Action controls */}
      <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0 border-t sm:border-t-0 border-neutral-800 pt-3 sm:pt-0">
        
        {/* Toggle liked (remove) */}
        <button
          onClick={() => toggleWishlist(product)}
          className="p-2.5 text-brand-primary bg-brand-primary/10 hover:bg-neutral-800 rounded-full transition-colors flex items-center justify-center border border-brand-primary/20 hover:border-neutral-700"
          aria-label="Remove from Wishlist"
          title="Remove from Wishlist"
        >
          <Heart size={18} className="fill-brand-primary" />
        </button>

        {/* Move to cart trigger */}
        <AnimatedButton
          variant="primary"
          onClick={() => onQuickView(product)}
          className="py-2.5 px-5 text-xs"
        >
          <ShoppingCart size={14} />
          Add to Bag
        </AnimatedButton>

      </div>
    </motion.div>
  );
};

export default WishlistItem;
