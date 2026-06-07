import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import EmptyState from '../components/EmptyState';
import AnimatedButton from '../components/AnimatedButton';
import { AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cart } = useShop();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <PageTransition>
        <div className="py-12">
          <EmptyState
            icon={ShoppingBag}
            title="Your Shopping Bag is Empty"
            description="Looks like you haven't added any premium sneakers to your bag yet. Start exploring our latest drops to fill it up!"
            buttonText="Continue Shopping"
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
            <ShoppingBag size={28} className="text-brand-primary" />
            Shopping Bag
          </h1>
          <p className="text-neutral-500 text-xs sm:text-sm mt-1">Review the shoes in your cart before checkout.</p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart list (8 columns) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <CartItem
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`}
                    item={item}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Back to shop navigation */}
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

          {/* Checkout Summary (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <OrderSummary showCoupon={true} />
            <AnimatedButton
              variant="primary"
              fullWidth
              onClick={() => navigate('/checkout')}
              className="py-4 font-black uppercase tracking-wider text-base shadow-[0_6px_20px_rgba(239,68,68,0.3)]"
            >
              Proceed to Checkout
              <ArrowRight size={18} />
            </AnimatedButton>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Cart;
