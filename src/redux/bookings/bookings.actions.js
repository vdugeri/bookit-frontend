import { bookingsActionTypes } from "./bookings.types";
import axios from "../../utils/http-client";

export const bookBus = bus => {
  return async dispatch => {
    const endpoint = "/bookings";
    const res = await axios.post(endpoint, bus);
    const booking = res.data.data;

    dispatch({
      type: bookingsActionTypes.BOOK_BUS,
      payload: booking
    });
  };
};
