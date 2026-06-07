import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton';
import { CreditCard, Truck, User, Mail, MapPin, Globe, Calendar, KeyRound } from 'lucide-react';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardNumberChange = (e) => {
    // Basic formatting for card: add spaces every 4 digits
    let val = e.target.value.replace(/\D/g, '');
    val = val.substring(0, 16);
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      val = parts.join(' ');
    } else {
      val = e.target.value;
    }

    setFormData((prev) => ({ ...prev, cardNumber: val }));
  };

  const handleExpiryChange = (e) => {
    // Format MM/YY
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.substring(0, 4);
    if (val.length >= 2) {
      val = `${val.substring(0, 2)}/${val.substring(2)}`;
    }
    setFormData((prev) => ({ ...prev, cardExpiry: val }));
  };

  const handleCvcChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').substring(0, 3);
    setFormData((prev) => ({ ...prev, cardCvc: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.address.trim() &&
      formData.city.trim() &&
      formData.zip.trim() &&
      formData.cardName.trim() &&
      formData.cardNumber.length >= 19 && // 16 digits + 3 spaces
      formData.cardExpiry.length === 5 &&
      formData.cardCvc.length === 3
    ) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 select-none">
      
      {/* Shipping Section */}
      <div className="bg-neutral-900 border border-neutral-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2.5 pb-4 border-b border-neutral-800/60">
          <Truck size={20} className="text-brand-primary" />
          Shipping Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-2 col-span-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Full Name</label>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-neutral-950 text-white text-sm pl-11 pr-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-2 col-span-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-neutral-950 text-white text-sm pl-11 pr-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary"
                placeholder="johndoe@example.com"
              />
            </div>
          </div>

          {/* Street Address */}
          <div className="space-y-2 col-span-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Street Address</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="bg-neutral-950 text-white text-sm pl-11 pr-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary"
                placeholder="123 Sneaker St"
              />
            </div>
          </div>

          {/* City */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="bg-neutral-950 text-white text-sm px-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary"
              placeholder="New York"
            />
          </div>

          {/* Zip Code */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">ZIP / Postal Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
              className="bg-neutral-950 text-white text-sm px-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary"
              placeholder="10001"
            />
          </div>

          {/* Country */}
          <div className="space-y-2 col-span-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Country</label>
            <div className="relative">
              <Globe size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="bg-neutral-950 text-white text-sm pl-11 pr-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary appearance-none cursor-pointer"
              >
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="bg-neutral-900 border border-neutral-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2.5 pb-4 border-b border-neutral-800/60">
          <CreditCard size={20} className="text-brand-primary" />
          Payment Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Cardholder Name */}
          <div className="space-y-2 col-span-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Cardholder Name</label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              required
              className="bg-neutral-950 text-white text-sm px-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary"
              placeholder="John Doe"
            />
          </div>

          {/* Card Number */}
          <div className="space-y-2 col-span-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Card Number</label>
            <div className="relative">
              <CreditCard size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleCardNumberChange}
                required
                className="bg-neutral-950 text-white text-sm pl-11 pr-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary font-mono tracking-widest"
                placeholder="4000 1234 5678 9010"
              />
            </div>
          </div>

          {/* Expiry Date */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Expiration Date</label>
            <div className="relative">
              <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
              <input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleExpiryChange}
                required
                className="bg-neutral-950 text-white text-sm pl-11 pr-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary font-mono"
                placeholder="MM/YY"
              />
            </div>
          </div>

          {/* CVC */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">CVC / Security Code</label>
            <div className="relative">
              <KeyRound size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
              <input
                type="text"
                name="cardCvc"
                value={formData.cardCvc}
                onChange={handleCvcChange}
                required
                className="bg-neutral-950 text-white text-sm pl-11 pr-4 py-3.5 rounded-2xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary font-mono"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <AnimatedButton type="submit" variant="primary" fullWidth className="py-4 text-base font-black uppercase tracking-wider shadow-[0_6px_25px_rgba(239,68,68,0.4)]">
        Confirm & Place Order
      </AnimatedButton>
      
    </form>
  );
};

export default CheckoutForm;
