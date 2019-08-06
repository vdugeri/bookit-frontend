import { checkoutActionTypes } from "./checkout.types";

const INITIAL_STATE = {
  paymentDetails: {}
};

const checkoutReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case checkoutActionTypes.PAYMENT_SUCCESSFUL:
      return {
        ...state,
        paymentDetails: payload
      };
    case checkoutActionTypes.PAYMENT_FAILED:
      return {
        ...state,
        paymentDetails: payload
      };
    default:
      return state;
  }
};

export default checkoutReducer;
