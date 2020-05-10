import { checkoutActionTypes } from "./checkout.types";

const INITIAL_STATE = {
  paymentDetails: null
};

const checkoutReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case checkoutActionTypes.PAYMENT_SUCCESSFUL:
      console.log(payload);
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
