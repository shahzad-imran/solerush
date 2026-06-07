import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-sm mt-auto">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <span className="text-xl font-black uppercase tracking-tighter text-white">
              Sole<span className="text-brand-primary">Rush</span>
            </span>
          </Link>
          <p className="text-neutral-500 leading-relaxed max-w-sm">
            SoleRush is the ultimate destination for premium sneakers, running shoes, and lifestyle footwear. Elevate your stride and express your unique style.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-neutral-900 hover:text-white rounded-full transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-neutral-900 hover:text-white rounded-full transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-neutral-900 hover:text-white rounded-full transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-neutral-900 hover:text-white rounded-full transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Shop Categories */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-xs">Categories</h4>
          <ul className="space-y-2.5">
            <li>
              <Link to="/shop" className="hover:text-white hover:underline transition-all">All Products</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white hover:underline transition-all">Sneakers</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white hover:underline transition-all">Running Shoes</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white hover:underline transition-all">Sports Gear</Link>
            </li>
          </ul>
        </div>

        {/* Support & Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-xs">Support</h4>
          <ul className="space-y-2.5">
            <li>
              <Link to="/about" className="hover:text-white hover:underline transition-all">About Our Story</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white hover:underline transition-all">Contact Us</Link>
            </li>
            <li>
              <span className="text-neutral-500 cursor-not-allowed">Terms of Service</span>
            </li>
            <li>
              <span className="text-neutral-500 cursor-not-allowed">Privacy Policy</span>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-xs">Get in Touch</h4>
          <ul className="space-y-3.5">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-primary shrink-0" />
              <span className="text-neutral-400">University of Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-primary shrink-0" />
              <span className="text-neutral-400">+92 308 8837679</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-primary shrink-0" />
              <span className="text-neutral-400">support@solerush.com</span>
            </li>
            <li className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-800 p-2.5 rounded-xl">
              <ShieldCheck size={18} className="text-green-500 shrink-0" />
              <span className="text-xs text-neutral-400 font-medium">Secure SSL checkout powered by Stripe</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 py-8 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} SoleRush. All rights reserved. Built with passion for sneakerheads.</p>
          <div className="flex items-center gap-6">
            <span>Free Shipping Worldwide</span>
            <span>30-Day Free Return Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
