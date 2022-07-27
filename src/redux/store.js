import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./productSlice";
import userSliceReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    product: productSliceReducer,
    user: userSliceReducer,
  },
});
