import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, RefreshCw } from 'lucide-react';

const FilterSidebar = ({ isOpen, onClose }) => {
  const { filters, setFilters, resetFilters } = useShop();

  const brands = ['Nike', 'Adidas', 'Jordan', 'Puma', 'New Balance'];
  const categories = ['Sneakers', 'Running', 'Sports'];
  const genders = ['Men', 'Women', 'Unisex'];
  const sizes = [5, 6, 7, 8, 9, 10, 11, 12, 13];
  
  const colors = [
    { name: 'Red', hex: '#ef4444' },
    { name: 'Black', hex: '#171717' },
    { name: 'White', hex: '#ffffff' },
    { name: 'Green', hex: '#22c55e' },
    { name: 'Blue', hex: '#3b82f6' },
    { name: 'Gold', hex: '#d97706' },
    { name: 'Gray', hex: '#737373' },
    { name: 'Pink', hex: '#f472b6' }
  ];

  const handleCheckboxChange = (field, value) => {
    setFilters((prev) => {
      const activeList = prev[field];
      const isExist = activeList.includes(value);
      const newList = isExist 
        ? activeList.filter((item) => item !== value)
        : [...activeList, value];
      return { ...prev, [field]: newList };
    });
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setFilters((prev) => ({ ...prev, priceRange: [0, value] }));
  };

  const handleRatingSelect = (ratingValue) => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating === ratingValue ? 0 : ratingValue
    }));
  };

  const SidebarContent = () => (
    <div className="space-y-8 select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <h3 className="text-base font-black uppercase tracking-wider text-white">Filters</h3>
        <button
          onClick={resetFilters}
          className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
        >
          <RefreshCw size={12} />
          Reset
        </button>
      </div>

      {/* Brand Filters */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Brands</h4>
        <div className="space-y-2">
          {brands.map((brand) => {
            const isChecked = filters.brands.includes(brand);
            return (
              <label key={brand} className="flex items-center gap-3 cursor-pointer group text-sm">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange('brands', brand)}
                  className="rounded border-neutral-800 bg-neutral-950 focus:ring-0 focus:ring-offset-0 text-brand-primary h-4.5 w-4.5"
                />
                <span className={`transition-colors ${isChecked ? 'text-white font-medium' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                  {brand}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Category Filters */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => {
            const isChecked = filters.categories.includes(category);
            return (
              <label key={category} className="flex items-center gap-3 cursor-pointer group text-sm">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange('categories', category)}
                  className="rounded border-neutral-800 bg-neutral-950 focus:ring-0 focus:ring-offset-0 text-brand-primary h-4.5 w-4.5"
                />
                <span className={`transition-colors ${isChecked ? 'text-white font-medium' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                  {category}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Gender Filters */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Gender</h4>
        <div className="space-y-2">
          {genders.map((gender) => {
            const isChecked = filters.genders.includes(gender);
            return (
              <label key={gender} className="flex items-center gap-3 cursor-pointer group text-sm">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange('genders', gender)}
                  className="rounded border-neutral-800 bg-neutral-950 focus:ring-0 focus:ring-offset-0 text-brand-primary h-4.5 w-4.5"
                />
                <span className={`transition-colors ${isChecked ? 'text-white font-medium' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                  {gender}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Slider */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Max Price</h4>
          <span className="text-xs font-black text-brand-primary">${filters.priceRange[1]}</span>
        </div>
        <div className="space-y-1">
          <input
            type="range"
            min="0"
            max="300"
            step="10"
            value={filters.priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-neutral-500 font-semibold">
            <span>$0</span>
            <span>$150</span>
            <span>$300</span>
          </div>
        </div>
      </div>

      {/* Sizes Grid */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Sizes</h4>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map((size) => {
            const isChecked = filters.sizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => handleCheckboxChange('sizes', size)}
                className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                  isChecked 
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-red-500/25'
                    : 'bg-neutral-950 text-neutral-400 border-neutral-800/80 hover:border-neutral-700 hover:text-white'
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Bubbles */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Colors</h4>
        <div className="flex flex-wrap gap-2.5">
          {colors.map((color) => {
            const isChecked = filters.colors.includes(color.name);
            return (
              <button
                key={color.name}
                onClick={() => handleCheckboxChange('colors', color.name)}
                className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                  isChecked 
                    ? 'scale-110 border-white ring-2 ring-brand-primary ring-offset-2 ring-offset-neutral-950'
                    : 'border-neutral-800 hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              >
                {isChecked && (
                  <span className={`w-1.5 h-1.5 rounded-full ${color.name === 'White' ? 'bg-black' : 'bg-white'}`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Star Ratings */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-white">Ratings</h4>
        <div className="space-y-2">
          {[4, 3, 2].map((stars) => {
            const isSelected = filters.rating === stars;
            return (
              <button
                key={stars}
                onClick={() => handleRatingSelect(stars)}
                className={`flex items-center gap-2 text-sm text-left w-full transition-colors ${
                  isSelected ? 'text-white font-bold' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <div className={`w-4 h-4 rounded-full border border-neutral-700 flex items-center justify-center ${isSelected ? 'bg-brand-primary border-brand-primary' : ''}`}>
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
                <span>{stars} Stars & Above</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 bg-neutral-900 border border-neutral-800/80 rounded-3xl p-6 h-fit sticky top-24">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div onClick={onClose} className="absolute inset-0 bg-black/60" />
        
        {/* Sidebar container */}
        <div className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-neutral-950 border-r border-neutral-850 p-6 overflow-y-auto transition-transform duration-350 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end mb-4">
            <button onClick={onClose} className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900">
              <X size={16} />
            </button>
          </div>
          <SidebarContent />
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
