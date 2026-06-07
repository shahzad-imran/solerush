import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Lock, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';
import EmptyState from '../components/EmptyState';
import AnimatedButton from '../components/AnimatedButton';

const Checkout = () => {
  const { cart, clearCart } = useShop();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [customerInfo, setCustomerInfo] = useState(null);

  if (cart.length === 0 && !orderPlaced) {
    return (
      <PageTransition>
        <div className="py-12">
          <EmptyState
            icon={ShoppingBag}
            title="Cannot Checkout"
            description="Your cart is empty. Please add some premium shoes to your cart before proceeding to checkout."
            buttonText="Back to Shop"
          />
        </div>
      </PageTransition>
    );
  }

  const handleFormSubmit = (data) => {
    // Generate a mock order number
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const mockOrderNum = `SR-${randomNum}`;
    setOrderNumber(mockOrderNum);
    setCustomerInfo(data);
    setOrderPlaced(true);
    
    // Clear cart in state and localstorage
    clearCart();
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none space-y-8 relative">
        
        {/* Title */}
        <div className="text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
              <Lock size={28} className="text-brand-primary" />
              Secure Checkout
            </h1>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">Complete your delivery and card details to place your order.</p>
          </div>
          <button
            onClick={() => navigate('/cart')}
            className="flex items-center gap-2 text-xs font-black uppercase text-neutral-400 hover:text-white tracking-widest transition-colors self-start sm:self-auto"
          >
            <ArrowLeft size={14} />
            Back to Bag
          </button>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form inputs (8 columns) */}
          <div className="lg:col-span-8">
            <CheckoutForm onSubmit={handleFormSubmit} />
          </div>

          {/* Locked Order Summary (4 columns) */}
          <div className="lg:col-span-4">
            <OrderSummary showCoupon={false} />
          </div>
        </div>

        {/* Success Modal Overlay */}
        <AnimatePresence>
          {orderPlaced && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 20, stiffness: 220 }}
                className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl z-10"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center mx-auto shadow-2xl">
                  <CheckCircle2 size={44} className="animate-bounce" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                    Order Confirmed!
                  </h2>
                  <p className="text-xs text-neutral-400">
                    Thank you for shopping at SoleRush. Your payment was processed successfully.
                  </p>
                </div>

                {/* Details box */}
                <div className="bg-neutral-950 border border-neutral-850 rounded-2xl p-4 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-bold uppercase tracking-wider">Order ID</span>
                    <span className="text-white font-black">{orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-bold uppercase tracking-wider">Deliver To</span>
                    <span className="text-white font-black truncate max-w-[180px]">{customerInfo?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-bold uppercase tracking-wider">Shipment Email</span>
                    <span className="text-white font-black truncate max-w-[180px]">{customerInfo?.email}</span>
                  </div>
                  <div className="flex justify-between border-t border-neutral-900 pt-2 mt-2">
                    <span className="text-neutral-500 font-bold uppercase tracking-wider">Estimated Delivery</span>
                    <span className="text-green-500 font-black">2 - 4 Business Days</span>
                  </div>
                </div>

                <div className="pt-2">
                  <AnimatedButton
                    variant="primary"
                    fullWidth
                    onClick={() => {
                      setOrderPlaced(false);
                      navigate('/');
                    }}
                  >
                    Go Back Home
                  </AnimatedButton>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};

export default Checkout;
