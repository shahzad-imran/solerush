import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  const { cart, wishlist, searchQuery, setSearchQuery, updateCartQuantity, removeFromCart } = useShop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/shop');
    setShowSearchBar(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tighter text-white font-sans uppercase">
              Sole<span className="text-brand-primary group-hover:text-red-400 transition-colors duration-300">Rush</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-2 ${
                    isActive ? 'text-white font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Icon Controls */}
          <div className="flex items-center gap-4 text-white">
            
            {/* Search Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowSearchBar(!showSearchBar)}
                className="p-2 hover:bg-neutral-800 rounded-full transition-colors"
                aria-label="Toggle Search"
              >
                <Search size={20} />
              </button>
              
              <AnimatePresence>
                {showSearchBar && (
                  <motion.form
                    onSubmit={handleSearchSubmit}
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-3 w-72 glass p-2 rounded-2xl shadow-2xl flex items-center gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Search shoes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-neutral-900 text-white text-sm px-4 py-2 rounded-xl w-full border border-neutral-800 focus:outline-none focus:border-brand-primary"
                      autoFocus
                    />
                    <button type="submit" className="p-2 bg-brand-primary rounded-xl text-white hover:bg-red-600 transition-colors">
                      <Search size={16} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="p-2 hover:bg-neutral-800 rounded-full transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart size={20} className={wishlist.length > 0 ? "fill-brand-primary text-brand-primary" : ""} />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-brand-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="p-2 hover:bg-neutral-800 rounded-full transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalCartItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-brand-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(239,68,68,0.6)]">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-neutral-800 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Slide-over Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full z-30 glass shadow-2xl flex flex-col md:hidden py-6 px-4 gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl text-base font-semibold uppercase tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? 'bg-brand-primary text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartDrawerOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-neutral-950 border-l border-neutral-800 z-50 flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
                <h3 className="text-lg font-black uppercase tracking-wider flex items-center gap-2">
                  <ShoppingBag size={20} className="text-brand-primary" />
                  Your Bag ({totalCartItems})
                </h3>
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <ShoppingBag size={64} className="text-neutral-700 animate-bounce" />
                    <p className="text-neutral-400 font-medium text-sm">Your shopping bag is empty.</p>
                    <AnimatedButton
                      variant="outline"
                      onClick={() => {
                        setIsCartDrawerOpen(false);
                        navigate('/shop');
                      }}
                    >
                      Shop Now
                    </AnimatedButton>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-4 p-3 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-xl bg-neutral-950 border border-neutral-800"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold truncate text-white">{item.product.name}</h4>
                        <p className="text-xs text-neutral-400 mb-1">{item.product.brand}</p>
                        
                        <div className="flex flex-wrap gap-2 text-xs text-neutral-400 mb-2">
                          <span>Size: <strong className="text-white">{item.selectedSize}</strong></span>
                          <span>Color: <strong className="text-white">{item.selectedColor.name}</strong></span>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity selector */}
                          <div className="flex items-center border border-neutral-800 rounded-full bg-neutral-950">
                            <button
                              onClick={() => updateCartQuantity(item.product.id, item.selectedSize, item.selectedColor.name, item.quantity - 1)}
                              className="px-2.5 py-1 text-sm text-neutral-400 hover:text-white"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-semibold text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateCartQuantity(item.product.id, item.selectedSize, item.selectedColor.name, item.quantity + 1)}
                              className="px-2.5 py-1 text-sm text-neutral-400 hover:text-white"
                            >
                              +
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-sm font-black text-brand-primary">${item.product.price * item.quantity}</span>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor.name)}
                              className="text-neutral-500 hover:text-red-400 p-1 rounded-full transition-colors"
                              aria-label="Remove Item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-neutral-800 bg-neutral-900/30 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-400">Subtotal</span>
                    <span className="text-lg font-black text-white">${cartSubtotal}</span>
                  </div>
                  <p className="text-xs text-neutral-500">Shipping, taxes, and discounts calculated at checkout.</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <AnimatedButton
                      variant="outline"
                      fullWidth
                      onClick={() => {
                        setIsCartDrawerOpen(false);
                        navigate('/cart');
                      }}
                    >
                      View Cart
                    </AnimatedButton>
                    <AnimatedButton
                      variant="primary"
                      fullWidth
                      onClick={() => {
                        setIsCartDrawerOpen(false);
                        navigate('/checkout');
                      }}
                    >
                      Checkout
                      <ArrowRight size={16} />
                    </AnimatedButton>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content overlapping fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
