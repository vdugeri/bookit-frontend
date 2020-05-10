import { checkoutActionTypes } from "./checkout.types";
import { cartActionTypes } from "../cart/cart.types";

export const checkout = ({ emailAddress, total }) => {
  return async dispatch => {
    const handler = window.PaystackPop.setup({
      key: "pk_test_c8b0cdae32b1f4f918e7ae362d6d87b112ccb582",
      email: emailAddress,
      amount: total,
      currency: "NGN",
      callback: function(response) {
        handleSuccess(response, { total, emailAddress, dispatch });
      },
      onClose: handleClose(dispatch)
    });
    handler.openIframe();
  };
};

const handleClose = dispatch => {
  dispatch({
    type: checkoutActionTypes.PAYMENT_FAILED,
    payload: { reason: "Window closed" }
  });

  dispatch({
    type: cartActionTypes.TOGGLE_HIDDEN
  });
};

const handleSuccess = (response, { total, emailAddress, dispatch }) => {
  console.log(response);
  const payload = {
    total,
    emailAddress,
    response
  };

  dispatch({
    type: checkoutActionTypes.PAYMENT_SUCCESSFUL,
    payload
  });

  clearAndHideCart(dispatch);
};

const clearAndHideCart = dispatch => {
  dispatch({
    type: cartActionTypes.TOGGLE_HIDDEN
  });
};
