import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    shoppingList: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.shoppingList.push(action.payload.productItem);
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

      // STEP 2: If every product is complete -> mark all of them incomplete.
      //         If even one of them is incomplete -> mark all of them complete.
      for (let i = 0; i < state.shoppingList.length; i++) {
        state.shoppingList[i].isComplete = !isAllComplete;
      }
    },
  },
});

export const { addProduct, toggleComplete, toggleCompleteAll } =
  productSlice.actions;

export default productSlice.reducer;
