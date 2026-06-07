import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem('solerush_cart');
    return localCart ? JSON.parse(localCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const localWishlist = localStorage.getItem('solerush_wishlist');
    return localWishlist ? JSON.parse(localWishlist) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [discount, setDiscount] = useState(null); // { code: 'SOLE20', type: 'percent', value: 20 }
  
  const [filters, setFilters] = useState({
    categories: [],
    genders: [],
    brands: [],
    sizes: [],
    colors: [],
    priceRange: [0, 300],
    rating: 0
  });

  useEffect(() => {
    localStorage.setItem('solerush_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('solerush_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, size, color, quantity = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => 
          item.product.id === product.id && 
          item.selectedSize === size && 
          item.selectedColor.name === color.name
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      }

      return [...prevCart, { product, selectedSize: size, selectedColor: color, quantity }];
    });
  };

  const removeFromCart = (productId, size, colorName) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => 
          !(item.product.id === productId && 
            item.selectedSize === size && 
            item.selectedColor.name === colorName)
      )
    );
  };

  const updateCartQuantity = (productId, size, colorName, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size, colorName);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (
          item.product.id === productId && 
          item.selectedSize === size && 
          item.selectedColor.name === colorName
        ) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id);
      }
      return [...prevWishlist, product];
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const applyDiscountCode = (code) => {
    const normalizedCode = code.trim().toUpperCase();
    if (normalizedCode === 'SOLE20') {
      setDiscount({ code: 'SOLE20', type: 'percent', value: 20 });
      return { success: true, message: '20% discount applied!' };
    } else if (normalizedCode === 'FREESHIP') {
      setDiscount({ code: 'FREESHIP', type: 'shipping', value: 0 });
      return { success: true, message: 'Free shipping applied!' };
    }
    return { success: false, message: 'Invalid coupon code.' };
  };

  const removeDiscount = () => {
    setDiscount(null);
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      genders: [],
      brands: [],
      sizes: [],
      colors: [],
      priceRange: [0, 300],
      rating: 0
    });
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        searchQuery,
        setSearchQuery,
        filters,
        setFilters,
        resetFilters,
        sortBy,
        setSortBy,
        discount,
        applyDiscountCode,
        removeDiscount,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
