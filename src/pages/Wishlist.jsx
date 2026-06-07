import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import WishlistItem from '../components/WishlistItem';
import EmptyState from '../components/EmptyState';
import ProductQuickViewModal from '../components/ProductQuickViewModal';
import { AnimatePresence } from 'framer-motion';

const Wishlist = () => {
  const { wishlist } = useShop();
  const navigate = useNavigate();
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState(null);

  if (wishlist.length === 0) {
    return (
      <PageTransition>
        <div className="py-12">
          <EmptyState
            icon={Heart}
            title="Your Wishlist is Empty"
            description="You haven't saved any premium sneakers to your wishlist yet. Tap the heart icon on any shoe card to save your favorites here!"
            buttonText="Explore Collection"
          />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none space-y-8">
        
        {/* Title */}
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
            <Heart size={28} className="text-brand-primary fill-brand-primary" />
            My Wishlist
          </h1>
          <p className="text-neutral-500 text-xs sm:text-sm mt-1">Sneakers you saved to purchase later.</p>
        </div>

        {/* Layout list */}
        <div className="max-w-4xl space-y-4">
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {wishlist.map((product) => (
                <WishlistItem
                  key={product.id}
                  product={product}
                  onQuickView={setSelectedQuickViewProduct}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Back navigation */}
          <div className="pt-6 text-left">
            <button
              onClick={() => navigate('/shop')}
              className="inline-flex items-center gap-2 text-xs font-black uppercase text-neutral-400 hover:text-white tracking-widest transition-colors"
            >
              <ArrowLeft size={14} />
              Continue Shopping
            </button>
          </div>
        </div>

        {/* Modal Selection */}
        <ProductQuickViewModal
          product={selectedQuickViewProduct}
          isOpen={selectedQuickViewProduct !== null}
          onClose={() => setSelectedQuickViewProduct(null)}
        />

      </div>
    </PageTransition>
  );
};

export default Wishlist;
