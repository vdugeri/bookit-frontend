import axios from "../../utils/http-client";
import { searchActionTypes } from "./search.types";

export const search = query => {
  return async dispatch => {
    const endpoint = "/itineraries";
    const res = await axios.get(endpoint, { query });
    const results = res.data.data;

    dispatch({
      type: searchActionTypes.ADD_BUSES,
      payload: results
    });
  };
};

export const setQuery = query => ({
  type: searchActionTypes.SET_QUERY,
  payload: query
});
