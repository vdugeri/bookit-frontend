import { searchActionTypes } from "./search.types";

const INITIAL_STATE = {
  busResults: [],
  query: {},
  loading: false,
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case searchActionTypes.ADD_BUSES:
      return {
        ...state,
        busResults: payload,
        loading: false,
      };
    case searchActionTypes.START_FETCHING_BUSES:
      return {
        ...state,
        loading: true,
      };
    case searchActionTypes.SET_QUERY:
      return {
        ...state,
        query: payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
