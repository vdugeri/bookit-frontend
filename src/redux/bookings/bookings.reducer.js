import { bookingsActionTypes } from "./bookings.types";

const INITIAL_STATE = {
  selectedBus: {},
  booking: {}
};

const bookingsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case bookingsActionTypes.SELECT_BUS:
      return {
        ...state,
        selectedBus: payload
      };
    case bookingsActionTypes.BOOK_BUS:
      return {
        ...state,
        booking: payload
      };
    default:
      return state;
  }
};

export default bookingsReducer;
