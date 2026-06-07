import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingBag, Heart, Eye } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import RatingStars from './RatingStars';
import AnimatedButton from './AnimatedButton';

const ProductQuickViewModal = ({ product, isOpen, onClose }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setQuantity(1);
      setAdded(false);
    }
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  const handleViewDetails = () => {
    onClose();
    navigate(`/product/${product.id}`);
  };

  const liked = isInWishlist(product.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white border border-neutral-850 backdrop-blur-md transition-all z-20"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Left: Product Images */}
          <div className="w-full md:w-1/2 bg-neutral-950 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-neutral-800">
            <motion.img
              layoutId={`product-image-${product.id}`}
              src={product.image}
              alt={product.name}
              className="max-h-[350px] object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right: Product Configurations */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              {/* Brand and Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase text-neutral-500 tracking-widest">
                  {product.brand}
                </span>
                {product.isNew && (
                  <span className="px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-white text-black rounded-full">
                    New
                  </span>
                )}
              </div>

              {/* Title & Price */}
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                {product.name}
              </h2>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl font-black text-brand-primary">${product.price}</span>
                {product.isSale && product.oldPrice > 0 && (
                  <span className="text-sm text-neutral-500 line-through font-bold">${product.oldPrice}</span>
                )}
              </div>

              {/* Stars */}
              <div className="mb-6 pb-5 border-b border-neutral-800/60">
                <RatingStars rating={product.rating} reviews={product.reviews} size={15} />
              </div>

              {/* Color Selector */}
              {selectedColor && (
                <div className="mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                    Select Color: <span className="text-white font-black">{selectedColor.name}</span>
                  </h4>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                          selectedColor.name === color.name
                            ? 'scale-110 border-white ring-2 ring-brand-primary ring-offset-2 ring-offset-neutral-950'
                            : 'border-neutral-800 hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor.name === color.name && (
                          <span className={`w-1.5 h-1.5 rounded-full ${color.name === 'White' ? 'bg-black' : 'bg-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {selectedSize && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                    Select Size (US Men): <span className="text-white font-black">{selectedSize}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[42px] h-10 px-3 rounded-xl text-xs font-bold border transition-all ${
                          selectedSize === size
                            ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-red-500/25'
                            : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity incrementer */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">Quantity</h4>
                <div className="flex items-center border border-neutral-800 rounded-full w-28 bg-neutral-950">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-neutral-400 hover:text-white text-base font-bold flex-1"
                  >
                    -
                  </button>
                  <span className="px-2 text-sm font-bold text-white text-center w-8 select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-neutral-400 hover:text-white text-base font-bold flex-1"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <AnimatedButton
                  variant="primary"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={added}
                >
                  <ShoppingBag size={18} />
                  {added ? 'Added to Bag!' : 'Add to Bag'}
                </AnimatedButton>
                
                <button
                  onClick={() => toggleWishlist(product)}
                  className="p-3 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white rounded-full transition-all active:scale-95 shadow-md flex items-center justify-center"
                  title="Toggle Wishlist"
                >
                  <Heart size={20} className={liked ? 'fill-brand-primary text-brand-primary' : ''} />
                </button>
              </div>

              <AnimatedButton
                variant="outline"
                fullWidth
                onClick={handleViewDetails}
              >
                <Eye size={18} />
                View Full Details
              </AnimatedButton>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductQuickViewModal;
