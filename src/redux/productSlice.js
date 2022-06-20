import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const productSlice = createSlice({
  name: "product",
  initialState: {
    shoppingList: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const productItem = {
        id: nanoid(),
        title: action.payload.title,
        isComplete: false,
      };
      state.shoppingList.push(productItem);
    },
    toggleComplete: (state, action) => {
      const idx = state.shoppingList.findIndex(
        (product) => product.id === action.payload.id
      );
      state.shoppingList[idx].isComplete = action.payload.isComplete;
    },
    toggleCompleteAll: (state) => {
      // STEP 1: Find if every product is complete
      const isAllComplete = state.shoppingList.every(
        (value) => value.isComplete === true
      );

      // STEP 2: If every product is check as complete, on click uncheck all products.
      for (let i = 0; i < state.shoppingList.length; i++) {
        state.shoppingList[i].isComplete = !isAllComplete;
      }
    },
  },
});

export const { addProduct, toggleComplete, toggleCompleteAll } =
  productSlice.actions;

export default productSlice.reducer;
