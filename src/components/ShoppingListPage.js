import React from "react";
import { useEffect } from "react";
import { getData } from "../redux/productSlice";
import { db } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import ProductAddForm from "./ProductAddForm";
import ProductList from "./ProductList";
import MainNavbar from "./MainNavbar";

function ShoppingListPage() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.userEmail);

  useEffect(() => {
    async function fetchShoppingList() {
      let fetchedData = [];
      const q = query(
        collection(db, "shopping-lists"),
        where("email", "==", userEmail)
      );
      const querySnapshot = await getDocs(q);
      let shallowFetchedData = [...fetchedData];

      querySnapshot.forEach((doc) => {
        shallowFetchedData.push(doc.data());
      });
      dispatch(getData(shallowFetchedData));
    }
    fetchShoppingList();
  }, []);

  return (
    <>
      <MainNavbar />
      <ProductAddForm />
      <ProductList />
    </>
  );
}

export default ShoppingListPage;
