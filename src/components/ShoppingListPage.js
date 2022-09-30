import React, { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductAddForm from "./ProductAddForm";
import ProductList from "./ProductList";
import Button from "react-bootstrap/Button";
import ChooseProductModal from "./ChooseProductModal";

function ShoppingListPage() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.userEmail);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts(userEmail));
  }, []);

  return (
    <>
      <ProductAddForm />
      <Button variant="outline-secondary" onClick={() => setOpenModal(true)}>
        Add from my products
      </Button>
      {openModal && <ChooseProductModal closeModal={setOpenModal} />}
      <ProductList />
    </>
  );
}

export default ShoppingListPage;
