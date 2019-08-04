import { createSelector } from "reselect";

const selectSearch = state => state.search;

export const selectBusResults = createSelector(
  [selectSearch],
  search => search.busResults
);

export const selectQuery = createSelector(
  [selectSearch],
  search => search.query
);
