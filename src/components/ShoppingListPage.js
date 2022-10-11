import React, { useState } from "react";
import { useEffect } from "react";
import { fetchProducts, fetchProductsForModal } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductAddForm from "./ProductAddForm";
import ProductList from "./ProductList";
import Button from "react-bootstrap/Button";
import ChooseProductModal from "./ChooseProductModal";

function ShoppingListPage() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.userEmail);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts(userEmail));
  }, []);

  return (
    <>
      <ProductAddForm />
      <Button variant="outline-secondary" onClick={() => setIsOpenModal(true)}>
        Add from my products
      </Button>
      {isOpenModal && <ChooseProductModal setIsOpenModal={setIsOpenModal} />}
      <ProductList />
    </>
  );
}

export default ShoppingListPage;
