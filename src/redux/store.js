import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import filterReducer from "./filterSlice";
import investReducer from "./investSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    filter: filterReducer,
    invest: investReducer,
  },
});
