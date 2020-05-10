import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  cart => cart.cartItem
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectPaymentDetails = createSelector(
  [selectCart],
  cart => cart.paymentDetails
);
