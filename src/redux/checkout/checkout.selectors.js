import { createSelector } from "reselect";

const selectCheckout = state => state.checkout;

export const selectPaymentDetails = createSelector(
  [selectCheckout],
  checkout => checkout.paymentDetails
);
