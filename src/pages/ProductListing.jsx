import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { SlidersHorizontal, Grid, Search, X } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';
import ProductQuickViewModal from '../components/ProductQuickViewModal';

const ProductListing = () => {
  const { 
    products, 
    searchQuery, 
    setSearchQuery, 
    filters, 
    setFilters, 
    resetFilters, 
    sortBy, 
    setSortBy 
  } = useShop();

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState(null);

  // Trigger loading skeleton on filter change for premium UX feel
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [filters, searchQuery, sortBy]);

  // Filtering Logic
  const filteredProducts = products.filter((product) => {
    // Search query check
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesName = product.name.toLowerCase().includes(q);
      const matchesBrand = product.brand.toLowerCase().includes(q);
      const matchesCategory = product.category.toLowerCase().includes(q);
      if (!matchesName && !matchesBrand && !matchesCategory) return false;
    }

    // Category check
    if (filters.categories.length > 0) {
      if (!filters.categories.includes(product.category)) return false;
    }

    // Gender check
    if (filters.genders.length > 0) {
      if (!filters.genders.includes(product.gender)) return false;
    }

    // Brand check
    if (filters.brands.length > 0) {
      if (!filters.brands.includes(product.brand)) return false;
    }

    // Sizes check
    if (filters.sizes.length > 0) {
      const hasSize = product.sizes.some((size) => filters.sizes.includes(size));
      if (!hasSize) return false;
    }

    // Colors check
    if (filters.colors.length > 0) {
      const hasColor = product.colors.some((color) => filters.colors.includes(color.name));
      if (!hasColor) return false;
    }

    // Price range check
    const maxPrice = filters.priceRange[1];
    if (product.price > maxPrice) return false;

    // Rating check
    if (filters.rating > 0) {
      if (product.rating < filters.rating) return false;
    }

    return true;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'newest') {
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      return b.id - a.id;
    }
    if (sortBy === 'price-asc') {
      return a.price - b.price;
    }
    if (sortBy === 'price-desc') {
      return b.price - a.price;
    }
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  // Clear query tag helper
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none">
        
        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left panel: Filters Sidebar */}
          <FilterSidebar 
            isOpen={isMobileFiltersOpen} 
            onClose={() => setIsMobileFiltersOpen(false)} 
          />

          {/* Right panel: Product Content */}
          <main className="flex-1 space-y-6">
            
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-3xl bg-neutral-900 border border-neutral-800/80">
              
              {/* Info text & search indicator */}
              <div className="flex flex-wrap items-center gap-3 text-left">
                <p className="text-sm text-neutral-400 font-medium">
                  Showing <strong className="text-white font-bold">{sortedProducts.length}</strong> Products
                </p>
                {searchQuery.trim() && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs text-white">
                    <span>Search: "{searchQuery}"</span>
                    <button onClick={handleClearSearch} className="text-neutral-500 hover:text-white transition-colors">
                      <X size={12} />
                    </button>
                  </div>
                )}
              </div>

              {/* Sort selector and Mobile filters trigger */}
              <div className="flex items-center gap-3 justify-between sm:justify-end">
                
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setIsMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                </button>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="hidden md:inline text-xs text-neutral-500 font-bold uppercase tracking-wider">Sort by</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-neutral-950 text-white text-xs px-4 py-2.5 rounded-2xl border border-neutral-800 focus:outline-none focus:border-brand-primary appearance-none cursor-pointer pr-8 relative"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%23a3a3a3\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3E%3C/svg%3E")', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                  >
                    <option value="newest">Newest Releases</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Best Customer Rated</option>
                  </select>
                </div>

              </div>

            </div>

            {/* Staggered Cards Grid */}
            <ProductGrid 
              products={sortedProducts} 
              loading={loading} 
              onQuickView={setSelectedQuickViewProduct} 
            />

          </main>

        </div>

        {/* Dynamic Modal overlay */}
        <ProductQuickViewModal
          product={selectedQuickViewProduct}
          isOpen={selectedQuickViewProduct !== null}
          onClose={() => setSelectedQuickViewProduct(null)}
        />

      </div>
    </PageTransition>
  );
};

export default ProductListing;
