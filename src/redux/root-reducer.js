import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import searchReducer from "./search/search.reducer";
import bookingsReducer from "./bookings/bookings.reducer";
import cartReducer from "./cart/cart.reducer";
import checkoutReducer from "./checkout/checkout.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["search", "query"]
};

const rootReducer = combineReducers({
  search: searchReducer,
  bookings: bookingsReducer,
  cart: cartReducer,
  checkout: checkoutReducer
});

export default persistReducer(persistConfig, rootReducer);
