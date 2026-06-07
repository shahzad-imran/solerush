import React from 'react';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const ProductGrid = ({ products, loading, onQuickView }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={`sk-${i}`} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5 space-y-4 animate-pulse">
            <div className="aspect-square bg-neutral-950 rounded-2xl w-full" />
            <div className="h-4 bg-neutral-800 rounded-full w-1/3" />
            <div className="h-5 bg-neutral-800 rounded-full w-3/4" />
            <div className="h-4 bg-neutral-800 rounded-full w-1/2" />
            <div className="flex justify-between items-center mt-6">
              <div className="h-6 bg-neutral-800 rounded-full w-1/4" />
              <div className="h-4 bg-neutral-800 rounded-full w-1/5" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-neutral-900/40 border border-neutral-800/50 rounded-3xl p-8 max-w-lg mx-auto">
        <p className="text-neutral-400 font-bold mb-2 text-lg">No products found</p>
        <p className="text-neutral-600 text-sm">Try adjusting your filters or search query to find what you're looking for.</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductGrid;
