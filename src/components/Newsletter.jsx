import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800/80 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
        {/* Ambient outline */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-orange-500/10 opacity-30 pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            Join the <span className="text-brand-primary">SoleRush</span> Club
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            Subscribe to get early access to drops, exclusive discounts, and sneaker releases sent directly to your inbox.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="newsletter-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-neutral-950 text-white text-sm px-6 py-4 rounded-full w-full border border-neutral-800 focus:outline-none focus:border-brand-primary transition-colors placeholder:text-neutral-600"
                />
                <AnimatedButton type="submit" variant="primary" className="whitespace-nowrap px-8">
                  Subscribe
                  <Send size={16} />
                </AnimatedButton>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center gap-3 pt-6 text-green-400"
              >
                <CheckCircle2 size={48} className="animate-bounce" />
                <h3 className="font-bold text-lg text-white">You're on the list!</h3>
                <p className="text-xs text-neutral-400">Check your inbox soon for your 15% discount code.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
