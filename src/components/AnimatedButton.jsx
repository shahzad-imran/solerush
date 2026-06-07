import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  disabled = false,
  fullWidth = false
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 text-sm py-3.5 px-7 tracking-wide active:scale-95 focus:outline-none select-none";
  
  const variants = {
    primary: "bg-brand-primary text-white border border-transparent shadow-[0_4px_14px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.5)]",
    secondary: "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]",
    outline: "bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-white hover:text-black",
    ghost: "bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-800/50"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === 'primary' && !disabled && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full -z-0" />
      )}
    </motion.button>
  );
};

export default AnimatedButton;
