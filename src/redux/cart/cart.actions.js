import { cartActionTypes } from "./cart.types";

export const addItemToCart = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const toggleHidden = () => ({
  type: cartActionTypes.TOGGLE_HIDDEN
});
