import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const productItem = {
        id: nanoid(),
        title: action.payload.title,
        isComplete: false,
      };
      state.push(productItem);
    },
    toggleComplete: (state, action) => {
      const idx = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state[idx].isComplete = action.payload.isComplete;
    },
  },
});

export const { addProduct, toggleComplete } = productSlice.actions;

export default productSlice.reducer;
