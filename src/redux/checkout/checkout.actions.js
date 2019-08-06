import { checkoutActionTypes } from "./checkout.types";

export const checkout = ({ emailAddress, total }) => {
  return async dispatch => {
    const handler = window.PaystackPop.setup({
      key: "pk_test_c8b0cdae32b1f4f918e7ae362d6d87b112ccb582",
      email: emailAddress,
      amount: total,
      currency: "NGN",
      callback: function(response) {
        const payload = {
          total,
          emailAddress,
          response
        };
        dispatch({
          type: checkoutActionTypes.PAYMENT_SUCCESSFUL,
          payload
        });
      },
      onClose: function() {
        dispatch({
          type: checkoutActionTypes.PAYMENT_FAILED,
          payload: { reason: "Window closed" }
        });
      }
    });
    handler.openIframe();
  };
};
