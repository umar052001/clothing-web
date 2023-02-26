import {
  ActionWithPayLoad,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer";
import { CategoryItem } from "../category/category.types";
import { CartItem, CART_ACTION_TYPES } from "./cart.type";

const addCartItem = (
  cartItems: CartItem[],
  productsToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productsToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      (cartItem.id === productsToAdd.id) && (cartItem.quantity <= 5)
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productsToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  productsToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productsToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productsToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productsToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeFromClick = (
  cartItems: CartItem[],
  productsToRemove: CartItem
): CartItem[] => {
  return cartItems.filter((item) => item.id !== productsToRemove.id);
};

export type SetIsCartOpen = ActionWithPayLoad<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItem = ActionWithPayLoad<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItem =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addToCart = (
  cartItems: CartItem[],
  productsToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productsToAdd);
  return setCartItems(newCartItems);
};

export const removeToCart = (
  cartItems: CartItem[],
  productsToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productsToRemove);
  return setCartItems(newCartItems);
};

export const removeOnClick = (
  cartItems: CartItem[],
  productsToRemove: CartItem
) => {
  const newCartItems = removeFromClick(cartItems, productsToRemove);
  return setCartItems(newCartItems);
};

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);
