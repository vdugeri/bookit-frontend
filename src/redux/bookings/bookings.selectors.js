import { createSelector } from "reselect";

const selectBookings = state => state.bookings;

export const selectSelectedBus = createSelector(
  [selectBookings],
  bookings => bookings.selectedBus
);

export const selectBooking = createSelector(
  [selectBookings],
  bookings => bookings.booking
);
