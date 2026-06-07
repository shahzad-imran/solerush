import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Flame, ShieldAlert, Sparkles, Star, Trophy, Truck, RefreshCw, Lock } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedButton from '../components/AnimatedButton';
import ProductCard from '../components/ProductCard';
import ProductQuickViewModal from '../components/ProductQuickViewModal';
import ReviewCard from '../components/ReviewCard';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const { products } = useShop();
  const navigate = useNavigate();
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState(null);

  // Trending & New products selectors
  const trendingShoes = products.filter(p => p.rating >= 4.8).slice(0, 4);
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);

  const reviews = [
    { name: 'Sarah Connor', rating: 5, comment: 'The Air Max Pulse is incredibly comfortable. SoleRush delivered them in just 2 days. Amazing service!' },
    { name: 'Marcus Aurelius', rating: 5, comment: 'Ultraboost Light is the best running shoe I have ever owned. High quality materials and superb cushioning.' },
    { name: 'Elena Rostova', rating: 4.8, comment: 'Beautiful Jordan sneakers. Standard shipping was free and quick checkout took seconds. Highly recommend!' }
  ];

  const categories = [
    { name: 'Sneakers', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80', desc: 'Lifestyle & Street' },
    { name: 'Running', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80', desc: 'Performance & Speed' },
    { name: 'Sports', image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80', desc: 'Training & Fitness' }
  ];

  const benefits = [
    { icon: Truck, title: 'Free Delivery', desc: 'On all orders above $150 worldwide' },
    { icon: RefreshCw, title: '30-Day Returns', desc: 'Hassle-free exchange policy' },
    { icon: Lock, title: 'Secure Checkout', desc: 'Encrypted credit card payments' },
    { icon: Trophy, title: 'Premium Quality', desc: '100% authentic designer brands' }
  ];

  return (
    <PageTransition>
      <div className="space-y-20 pb-20 select-none overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Decorative glowing background blobs */}
          <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Hero Text */}
            <div className="space-y-6 text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-xs font-black uppercase tracking-widest"
              >
                <Flame size={12} />
                Summer Release Drop
              </motion.div>
              
              <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight font-sans">
                Unleash Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-red-500 to-orange-500 text-glow">
                  Ultra Velocity
                </span>
              </h1>
              
              <p className="text-neutral-400 text-base sm:text-lg max-w-lg leading-relaxed">
                Step into the future of footwear with SoleRush. Discover curated sneaker drops, expert running technology, and iconic athletic designs built for ultimate performance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <AnimatedButton
                  variant="primary"
                  onClick={() => navigate('/shop')}
                >
                  Shop Now
                  <ArrowRight size={18} />
                </AnimatedButton>
                <AnimatedButton
                  variant="outline"
                  onClick={() => navigate('/about')}
                >
                  Explore Story
                </AnimatedButton>
              </div>
            </div>

            {/* Hero Shoe Render */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-brand-primary/20 to-orange-500/20 blur-[60px] pointer-events-none -z-10" />
              <motion.img
                initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                animate={{ opacity: 1, rotate: -8, scale: 1 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.1 }}
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
                alt="Featured Red Nike Shoe"
                className="w-full max-w-[450px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] animate-float cursor-pointer select-none"
                onClick={() => navigate('/product/1')}
              />
            </div>
          </div>
        </section>

        {/* BRAND BENEFITS ribbon */}
        <section className="bg-neutral-900 border-y border-neutral-800/80 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item) => (
              <div key={item.title} className="flex items-center gap-4 group">
                <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-2xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <item.icon size={22} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wide">{item.title}</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPLORE CATEGORIES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Featured Collections
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-medium">Explore shoes curated for your daily lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate('/shop')}
                className="group relative rounded-3xl overflow-hidden aspect-[16/10] bg-neutral-950 border border-neutral-800/80 cursor-pointer shadow-xl"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left bg-gradient-to-t from-black via-black/30 to-transparent">
                  <span className="text-[10px] text-brand-primary font-black uppercase tracking-widest mb-1">{cat.desc}</span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">{cat.name}</h3>
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-black uppercase text-white tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore collection
                    <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TRENDING SNEAKERS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center justify-center sm:justify-start gap-2">
                <Sparkles size={24} className="text-amber-500" />
                Trending Sneakers
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm font-medium">The most wanted releases of the week.</p>
            </div>
            <Link to="/shop" className="text-xs font-black uppercase text-brand-primary hover:text-red-400 tracking-widest flex items-center gap-1.5 group select-none">
              View All Shop
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trendingShoes.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedQuickViewProduct}
              />
            ))}
          </div>
        </section>

        {/* SALE BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-red-600 via-brand-primary to-orange-500 p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="space-y-4 max-w-xl relative z-10">
              <span className="px-3.5 py-1 text-[10px] font-black uppercase tracking-wider bg-white text-black rounded-full shadow-lg inline-block">
                Exclusive Deal
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                Unlock 20% Discount <br />On Your First Order
              </h2>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                Use checkout coupon code <strong className="text-white font-black underline">SOLE20</strong>. Hurry up, this offer is valid for a limited time on all new arrivals.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <AnimatedButton
                variant="secondary"
                onClick={() => navigate('/shop')}
                className="py-4 px-8 bg-black hover:bg-neutral-950 text-white border-transparent"
              >
                Claim Coupon Now
                <ArrowRight size={18} />
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* NEW ARRIVALS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
              <Trophy size={22} className="text-brand-primary" />
              New Releases
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-medium">Fresh items added to our store catalogue.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedQuickViewProduct}
              />
            ))}
          </div>
        </section>

        {/* CUSTOMER REVIEWS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              What Our Clients Say
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-medium">Reviews and feedback from sneaker enthusiasts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <ReviewCard key={rev.name} review={rev} />
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <Newsletter />

        {/* QUICK VIEW MODAL */}
        <ProductQuickViewModal
          product={selectedQuickViewProduct}
          isOpen={selectedQuickViewProduct !== null}
          onClose={() => setSelectedQuickViewProduct(null)}
        />

      </div>
    </PageTransition>
  );
};

export default Home;
