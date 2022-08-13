import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartState } from "./cart.reducer";

const selectReducer = (state:RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectReducer],
  (cart) => cart.cartItems
);
export const selectIsCartOpen = createSelector(
  [selectReducer],
  (cart) => cart.isCartOpen
);
export const selectCartCount = createSelector([selectCartItems], (cart) =>
  cart.reduce((total, cartItems) => total + cartItems.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cart) =>
  cart.reduce((total, cartItems) => {
    return total + cartItems.quantity * cartItems.price;
  }, 0)
);
