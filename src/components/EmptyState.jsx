import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const EmptyState = ({ icon: Icon, title, description, buttonText = "Explore Collection" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 max-w-md mx-auto select-none">
      {/* Animated icon container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
        className="w-24 h-24 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-brand-primary mb-6 shadow-2xl"
      >
        <Icon size={40} className="animate-pulse" />
      </motion.div>

      {/* Texts */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl font-black uppercase tracking-tight text-white mb-2"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm"
      >
        {description}
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <AnimatedButton
          variant="primary"
          onClick={() => navigate('/shop')}
        >
          {buttonText}
        </AnimatedButton>
      </motion.div>
    </div>
  );
};

export default EmptyState;
