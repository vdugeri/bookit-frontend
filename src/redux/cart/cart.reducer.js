import { cartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  cartItems: {},
  hidden: true,
  paymentDetails: {}
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case cartActionTypes.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: payload
      };

    case cartActionTypes.SUCCESS:
      return {
        ...state,
        paymentDetails: payload
      };

    case cartActionTypes.FAILURE: {
      return {
        ...state,
        paymentDetails: payload
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
