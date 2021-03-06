import { cartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  cartItem: {},
  hidden: true
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
        cartItem: payload
      };

    case cartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItem: {}
      };

    default:
      return state;
  }
};

export default cartReducer;
