import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, Heart, Star, ShieldCheck, Truck, RefreshCw, ChevronDown, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedButton from '../components/AnimatedButton';
import RatingStars from '../components/RatingStars';
import ProductCard from '../components/ProductCard';
import ProductQuickViewModal from '../components/ProductQuickViewModal';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, isInWishlist } = useShop();

  const product = products.find((p) => p.id === parseInt(id));

  const [activeImage, setActiveImage] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState(null);
  
  // Accordion open states
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(true);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

  useEffect(() => {
    if (product) {
      window.scrollTo(0, 0);
      setActiveImage(product.image);
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setQuantity(1);
      setAdded(false);
    } else {
      navigate('/404');
    }
  }, [product, id, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const liked = isInWishlist(product.id);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none space-y-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Image Showcase (5 columns) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Preview (Zoom effect) */}
            <div className="relative aspect-square w-full rounded-3xl bg-neutral-950 border border-neutral-800/80 overflow-hidden flex items-center justify-center p-8">
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.isNew && (
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-wider bg-white text-black rounded-full shadow-md">
                    New
                  </span>
                )}
                {product.isSale && (
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-wider bg-brand-primary text-white rounded-full shadow-md">
                    Sale
                  </span>
                )}
              </div>

              <div className="w-full h-full overflow-hidden flex items-center justify-center group">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-[420px] object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out select-none"
                />
              </div>
            </div>

            {/* Thumbnails grid */}
            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`aspect-square rounded-2xl bg-neutral-950 border overflow-hidden p-2 transition-all ${
                    activeImage === imgUrl 
                      ? 'border-brand-primary ring-2 ring-brand-primary/20 scale-95' 
                      : 'border-neutral-800 hover:border-neutral-700 hover:scale-95'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail preview" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

          </div>

          {/* Right: Configurations (6 columns) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-8">
            
            <div className="space-y-6">
              {/* Brand and category */}
              <div>
                <span className="text-xs font-black uppercase text-brand-primary tracking-widest block mb-2">
                  {product.brand} · {product.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  {product.name}
                </h1>
              </div>

              {/* Rating stars */}
              <RatingStars rating={product.rating} reviews={product.reviews} size={16} />

              {/* Price row */}
              <div className="flex items-center gap-4 py-2 border-y border-neutral-900">
                <span className="text-2xl font-black text-white">${product.price}</span>
                {product.isSale && product.oldPrice > 0 && (
                  <span className="text-sm text-neutral-500 line-through font-bold">${product.oldPrice}</span>
                )}
              </div>

              {/* Color options */}
              {selectedColor && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Select Color: <span className="text-white font-black">{selectedColor.name}</span>
                  </h4>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8.5 h-8.5 rounded-full flex items-center justify-center border transition-all ${
                          selectedColor.name === color.name
                            ? 'scale-110 border-white ring-2 ring-brand-primary ring-offset-2 ring-offset-neutral-950'
                            : 'border-neutral-800 hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor.name === color.name && (
                          <span className={`w-1.5 h-1.5 rounded-full ${color.name === 'White' ? 'bg-black' : 'bg-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size options */}
              {selectedSize && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Select Size (US Men): <span className="text-white font-black">{selectedSize}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[46px] h-11 px-3.5 rounded-xl text-xs font-bold border transition-all ${
                          selectedSize === size
                            ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-red-500/25'
                            : 'bg-neutral-950 text-neutral-400 border-neutral-850 hover:border-neutral-750 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity incrementer */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Quantity</h4>
                <div className="flex items-center border border-neutral-800 rounded-full w-28 bg-neutral-950">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-neutral-400 hover:text-white text-base font-bold flex-1"
                  >
                    -
                  </button>
                  <span className="px-2 text-sm font-bold text-white text-center w-8 select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-neutral-400 hover:text-white text-base font-bold flex-1"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="text-neutral-400 text-sm leading-relaxed pt-2">
                <p>{product.description}</p>
              </div>

            </div>

            {/* Cart & Wishlist Trigger row */}
            <div className="flex gap-4 pt-4 border-t border-neutral-900">
              <AnimatedButton
                variant="primary"
                className="flex-1 py-4 text-sm font-black uppercase tracking-wider shadow-lg"
                onClick={handleAddToCart}
                disabled={added}
              >
                <ShoppingBag size={18} />
                {added ? 'Added to Bag!' : 'Add to Bag'}
              </AnimatedButton>
              
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3.5 bg-neutral-950 border rounded-2xl flex items-center justify-center transition-all active:scale-95 shadow-md ${
                  liked ? 'border-brand-primary text-brand-primary bg-brand-primary/5' : 'border-neutral-800 text-neutral-400 hover:text-white'
                }`}
                title="Toggle Wishlist"
              >
                <Heart size={22} className={liked ? 'fill-brand-primary' : ''} />
              </button>
            </div>

            {/* Accordion list */}
            <div className="border-t border-neutral-900 divide-y divide-neutral-900">
              {/* Features Accordion */}
              <div className="py-4.5">
                <button
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                  className="w-full flex items-center justify-between text-xs font-black uppercase tracking-wider text-white"
                >
                  <span className="flex items-center gap-2">
                    <Award size={16} className="text-brand-primary" />
                    Key Features
                  </span>
                  <ChevronDown size={16} className={`transform transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isFeaturesOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3.5 pl-5 list-disc text-xs text-neutral-400 space-y-2 leading-relaxed overflow-hidden"
                    >
                      {product.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Delivery Accordion */}
              <div className="py-4.5">
                <button
                  onClick={() => setIsDeliveryOpen(!isDeliveryOpen)}
                  className="w-full flex items-center justify-between text-xs font-black uppercase tracking-wider text-white"
                >
                  <span className="flex items-center gap-2">
                    <Truck size={16} className="text-brand-primary" />
                    Delivery & Returns
                  </span>
                  <ChevronDown size={16} className={`transform transition-transform ${isDeliveryOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isDeliveryOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3.5 text-xs text-neutral-400 space-y-2 leading-relaxed overflow-hidden"
                    >
                      <p>🚚 <strong>Standard Delivery:</strong> Free on orders over $150. Delivers in 2-4 business days.</p>
                      <p>📦 <strong>Returns:</strong> We offer a 30-day free returns and exchanges window. The shoes must be in original unworn packaging.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <section className="space-y-8 pt-10 border-t border-neutral-900">
            <div className="space-y-2 text-left">
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">Related Products</h2>
              <p className="text-neutral-500 text-xs sm:text-sm">You might also like these recommended items.</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onQuickView={setSelectedQuickViewProduct}
                />
              ))}
            </div>
          </section>
        )}

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

export default ProductDetail;
