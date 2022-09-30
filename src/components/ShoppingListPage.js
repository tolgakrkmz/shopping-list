import React from "react";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductAddForm from "./ProductAddForm";
import ProductList from "./ProductList";

function ShoppingListPage() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.userEmail);

  useEffect(() => {
    dispatch(fetchProducts(userEmail));
  }, []);

  return (
    <>
      <ProductAddForm />
      <ProductList />
    </>
  );
}

export default ShoppingListPage;
