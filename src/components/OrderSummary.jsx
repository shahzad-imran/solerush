import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Tag, X, ShoppingBag } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const OrderSummary = ({ showCoupon = true }) => {
  const { cart, discount, applyDiscountCode, removeDiscount } = useShop();
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  
  // Shipping: free above $150 or if coupon is FREESHIP
  const isFreeShip = cartSubtotal >= 150 || (discount && discount.code === 'FREESHIP');
  const shippingFee = cartSubtotal === 0 ? 0 : (isFreeShip ? 0 : 15);

  // Discount calculation
  let discountAmount = 0;
  if (discount && discount.type === 'percent') {
    discountAmount = Math.round((cartSubtotal * discount.value) / 100);
  }

  const taxAmount = Math.round((cartSubtotal - discountAmount) * 0.08); // 8% sales tax
  const orderTotal = cartSubtotal - discountAmount + shippingFee + taxAmount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    
    if (!couponCode.trim()) return;

    const res = applyDiscountCode(couponCode);
    if (res.success) {
      setCouponSuccess(res.message);
      setCouponCode('');
    } else {
      setCouponError(res.message);
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl sticky top-24 select-none">
      <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2.5 pb-4 border-b border-neutral-800/60">
        <ShoppingBag size={20} className="text-brand-primary" />
        Order Summary
      </h3>

      {/* Item list */}
      <div className="max-h-60 overflow-y-auto divide-y divide-neutral-800/50 pr-2">
        {cart.map((item) => (
          <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`} className="py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-12 h-12 object-cover rounded-xl bg-neutral-950 border border-neutral-850 shrink-0"
              />
              <div className="min-w-0 text-xs">
                <span className="block font-bold text-white truncate">{item.product.name}</span>
                <span className="text-neutral-500 font-semibold block uppercase">
                  Qty: {item.quantity} · Size: {item.selectedSize}
                </span>
              </div>
            </div>
            <span className="text-sm font-bold text-white shrink-0">${item.product.price * item.quantity}</span>
          </div>
        ))}
      </div>

      {/* Coupon UI */}
      {showCoupon && (
        <div className="pt-4 border-t border-neutral-800/60">
          {discount ? (
            <div className="bg-brand-primary/10 border border-brand-primary/25 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase">
                <Tag size={14} />
                <span>Code Applied: {discount.code}</span>
                {discount.type === 'percent' && <span>(-{discount.value}%)</span>}
              </div>
              <button
                onClick={removeDiscount}
                className="p-1 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors"
                title="Remove discount"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Discount code (e.g. SOLE20)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="bg-neutral-950 text-white text-xs px-4 py-3 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary transition-colors placeholder:text-neutral-600 uppercase"
              />
              <AnimatedButton type="submit" variant="secondary" className="px-5 py-3 text-xs whitespace-nowrap">
                Apply
              </AnimatedButton>
            </form>
          )}

          {couponError && <p className="text-[10px] text-red-500 font-bold mt-1.5 ml-1">{couponError}</p>}
          {couponSuccess && <p className="text-[10px] text-green-500 font-bold mt-1.5 ml-1">{couponSuccess}</p>}
          
          <div className="mt-1 ml-1 text-[10px] text-neutral-500 font-medium">
            💡 Use code <strong className="text-neutral-400 font-bold">SOLE20</strong> for 20% off or <strong className="text-neutral-400 font-bold">FREESHIP</strong> for free shipping.
          </div>
        </div>
      )}

      {/* Price breakdown */}
      <div className="pt-4 border-t border-neutral-800/60 space-y-3 text-sm">
        <div className="flex justify-between items-center text-neutral-400">
          <span>Subtotal</span>
          <span className="text-white font-medium">${cartSubtotal}</span>
        </div>

        {discountAmount > 0 && (
          <div className="flex justify-between items-center text-green-400 font-medium">
            <span>Discount</span>
            <span>-${discountAmount}</span>
          </div>
        )}

        <div className="flex justify-between items-center text-neutral-400">
          <span>Shipping</span>
          <span className="text-white font-medium">
            {shippingFee === 0 ? 'Free' : `$${shippingFee}`}
          </span>
        </div>

        <div className="flex justify-between items-center text-neutral-400">
          <span>Estimated Taxes (8%)</span>
          <span className="text-white font-medium">${taxAmount}</span>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-neutral-850 text-base">
          <span className="text-white font-black uppercase tracking-wider">Total</span>
          <span className="text-xl font-black text-brand-primary">${orderTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
