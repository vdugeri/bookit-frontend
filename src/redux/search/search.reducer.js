import { searchActionTypes } from "./search.types";

const INITIAL_STATE = {
  busResults: []
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case searchActionTypes.ADD_BUSES:
      return {
        ...state,
        busResults: payload
      };

    default:
      return state;
  }
};

export default searchReducer;
