import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (userEmail) => {
    const q = query(
      collection(db, "shopping-lists"),
      where("email", "==", userEmail)
    );
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  }
);

export const fetchCommonProducts = createAsyncThunk(
  "product/fetchCommonProducts",
  async (userEmail) => {
    const q = query(
      collection(db, "products"),
      where("email", "==", userEmail)
    );
    const querySnapshot = await getDocs(q);
    const commonProducts = [];
    querySnapshot.forEach((doc) => {
      commonProducts.push(doc.data());
    });
    return commonProducts;
  }
);

export const fetchProductsForModal = createAsyncThunk(
  "product/fetchProductsForModal",
  async (userEmail) => {
    const q = query(
      collection(db, "products"),
      where("email", "==", userEmail)
    );
    const querySnapshot = await getDocs(q);
    const modalProducts = [];
    querySnapshot.forEach((doc) => {
      modalProducts.push(doc.data());
    });
    return modalProducts;
  }
);

export const addNewProduct = createAsyncThunk(
  "product/addNewProduct",
  async (productItem) => {
    await setDoc(doc(db, "shopping-lists", productItem.id), productItem);
    return productItem;
  }
);

export const addNewCommonProduct = createAsyncThunk(
  "product/addNewCommonProduct",
  async (commonProduct) => {
    await setDoc(doc(db, "products", commonProduct.id), commonProduct);
    return commonProduct;
  }
);

export const toggleCompleteProduct = createAsyncThunk(
  "product/toggleCompleteProduct",
  async ({ id, isComplete }) => {
    const documentRef = doc(db, "shopping-lists", id);
    updateDoc(documentRef, {
      isComplete: !isComplete,
    });
    const toggleComplete = { id, isComplete: !isComplete };
    return toggleComplete;
  }
);

export const toggleCompleteAllProducts = createAsyncThunk(
  "product/toggleCompleteAllProducts",
  async () => {
    const querySnapshot = await getDocs(collection(db, "shopping-lists"));

    // STEP 1: Find if every product is complete.
    const allDocuments = [];
    querySnapshot.forEach((document) => {
      const documentData = document.data();
      allDocuments.push(documentData);
    });
    const isAllComplete = allDocuments.every(
      (value) => value.isComplete === true
    );

    // STEP 2: If every product is complete -> mark all of them incomplete.
    //         If even one of them is incomplete -> mark all of them complete.
    querySnapshot.forEach((document) => {
      const documentRef = doc(db, "shopping-lists", document.id);
      updateDoc(documentRef, {
        isComplete: !isAllComplete,
      });
    });
  }
);

export const deleteCommonProduct = createAsyncThunk(
  "product/deleteCommonProduct",
  async (id) => {
    await deleteDoc(doc(db, "products", id));
    return id;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    shoppingList: [],
    commonProducts: [],
    modalProducts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.shoppingList = action.payload;
    });
    builder.addCase(fetchCommonProducts.fulfilled, (state, action) => {
      state.commonProducts = action.payload;
    });
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.shoppingList.push(action.payload);
    });
    builder.addCase(addNewCommonProduct.fulfilled, (state, action) => {
      state.commonProducts.push(action.payload);
    });
    builder.addCase(toggleCompleteProduct.fulfilled, (state, action) => {
      const idx = state.shoppingList.findIndex(
        (product) => product.id === action.payload.id
      );
      state.shoppingList[idx].isComplete = action.payload.isComplete;
    });
    builder.addCase(toggleCompleteAllProducts.fulfilled, (state) => {
      // STEP 1: Find if every product is complete
      const isAllComplete = state.shoppingList.every(
        (value) => value.isComplete === true
      );

      // STEP 2: If every product is complete -> mark all of them incomplete.
      //         If even one of them is incomplete -> mark all of them complete.
      for (let i = 0; i < state.shoppingList.length; i++) {
        state.shoppingList[i].isComplete = !isAllComplete;
      }
    });
    builder.addCase(deleteCommonProduct.fulfilled, (state, action) => {
      return {
        ...state.commonProducts,
        commonProducts: state.commonProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    });
    builder.addCase(fetchProductsForModal.fulfilled, (state, action) => {
      state.modalProducts = action.payload;
    });
  },
});

export default productSlice.reducer;
