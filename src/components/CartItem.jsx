import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion } from 'framer-motion';

const CartItem = ({ item }) => {
  const { updateCartQuantity, removeFromCart } = useShop();

  const handleDecrease = () => {
    updateCartQuantity(item.product.id, item.selectedSize, item.selectedColor.name, item.quantity - 1);
  };

  const handleIncrease = () => {
    updateCartQuantity(item.product.id, item.selectedSize, item.selectedColor.name, item.quantity + 1);
  };

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
          src={item.product.image}
          alt={item.product.name}
          className="w-24 h-24 object-cover rounded-2xl bg-neutral-950 border border-neutral-850 shrink-0"
        />
        <div className="min-w-0">
          <Link to={`/product/${item.product.id}`} className="block text-base font-bold text-white hover:text-brand-primary truncate">
            {item.product.name}
          </Link>
          <span className="text-xs text-neutral-500 uppercase font-bold tracking-wider">{item.product.brand}</span>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-neutral-400">
            <span className="flex items-center gap-1">
              Size: <strong className="text-white">{item.selectedSize}</strong>
            </span>
            <span className="flex items-center gap-1.5">
              Color: 
              <span className="w-3.5 h-3.5 rounded-full inline-block border border-neutral-850" style={{ backgroundColor: item.selectedColor.hex }} />
              <strong className="text-white">{item.selectedColor.name}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Control elements */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-2 sm:mt-0 border-t sm:border-t-0 border-neutral-800 pt-3 sm:pt-0">
        
        {/* Quantity selector */}
        <div className="flex items-center border border-neutral-800 rounded-full bg-neutral-950">
          <button
            onClick={handleDecrease}
            className="px-3 py-1.5 text-neutral-400 hover:text-white font-bold"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="px-3 text-sm font-bold text-white text-center w-8 select-none">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="px-3 py-1.5 text-neutral-400 hover:text-white font-bold"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Price and Delete */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="block text-base font-black text-brand-primary">
              ${item.product.price * item.quantity}
            </span>
            {item.quantity > 1 && (
              <span className="text-[10px] text-neutral-500 font-semibold block">
                (${item.product.price} each)
              </span>
            )}
          </div>
          <button
            onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor.name)}
            className="p-2.5 text-neutral-500 hover:text-red-400 hover:bg-neutral-800/50 rounded-full transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={18} />
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default CartItem;
