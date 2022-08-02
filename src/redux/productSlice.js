import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    shoppingList: [],
    commonProducts: [],
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
    deleteProduct: (state, action) => {
      return {
        commonProducts: state.commonProducts.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    },
    getData: (state, action) => {
      state.shoppingList = action.payload;
    },
    addCommonProduct: (state, action) => {
      state.commonProducts.push(action.payload.commonProducts);
    },
    fetchCommonProduct: (state, action) => {
      state.commonProducts = action.payload;
    },
  },
});

export const {
  addProduct,
  toggleComplete,
  toggleCompleteAll,
  getData,
  deleteProduct,
  addCommonProduct,
  fetchCommonProduct,
} = productSlice.actions;

export default productSlice.reducer;
