import React from "react";
import ProductAddForm from "./ProductAddForm";
import ProductList from "./ProductList";
import MainNavbar from "./MainNavbar";

function ShoppingListPage() {
  return (
    <>
      <MainNavbar />
      <ProductAddForm />
      <ProductList />
    </>
  );
}

export default ShoppingListPage;
