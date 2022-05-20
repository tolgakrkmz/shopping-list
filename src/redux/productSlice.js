import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const productItem = {
        id: state.id,
        title: action.payload.title,
        isComplete: false,
      };
      state.push(productItem);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
