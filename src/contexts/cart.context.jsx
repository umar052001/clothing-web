import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  cartCount: 0,
  removeToCart: () => {},
  removeOnClick: () => {},
  cartTotal: 0,
});
const addCartItem = (cartItems, productsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productsToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productsToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productsToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productsToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productsToRemove.id);
  }
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productsToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
const removeFromClick = (cartItems, productsToRemove) => {
  return cartItems.filter((item) => item.id !== productsToRemove.id);
};
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addToCart = (productsToAdd) => {
    setCartItems(addCartItem(cartItems, productsToAdd));
  };
  const removeToCart = (productsToRemove) => {
    setCartItems(removeCartItem(cartItems, productsToRemove));
  };
  const removeOnClick = (productsToRemove) => {
    setCartItems(removeFromClick(cartItems, productsToRemove));
  };
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity * cartItems.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    removeToCart,
    cartItems,
    setIsCartOpen,
    addToCart,
    isCartOpen,
    cartCount,
    removeOnClick,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
