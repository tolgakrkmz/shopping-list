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
    toggleCompleteAll: (state) => {
      // STEP 1: Find if every product is complete
      const isCheckAll = state.every((value) => value.isComplete === true);

      // STEP 2: If all is checked, Mark All
      for (let i = 0; i < state.length; i++) {
        state[i].isComplete = !isCheckAll;
      }
    },
  },
});

export const { addProduct, toggleComplete, toggleCompleteAll } =
  productSlice.actions;

export default productSlice.reducer;
