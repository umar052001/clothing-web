import { createAction } from "../../utils/reducer/reducer";
import { CART_ACTION_TYPES } from "./cart.type";

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

export const addToCart = (cartItems, productsToAdd) => {
  const newCartItems = addCartItem(cartItems, productsToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeToCart = (cartItems, productsToRemove) => {
  const newCartItems = removeCartItem(cartItems, productsToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeOnClick = (cartItems, productsToRemove) => {
  const newCartItems = removeFromClick(cartItems, productsToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
