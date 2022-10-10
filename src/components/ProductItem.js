import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  toggleCompleteProduct,
  addNewCommonProduct,
} from "../redux/productSlice";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "./ProductItem.css";

function ProductItem({ id, title, isComplete }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.shoppingList);

  function handleCheckboxChange() {
    dispatch(toggleCompleteProduct({ id, isComplete }));
  }

  function handleSaveProductButtonClick() {
    const selectedProduct = productList.find((product) => product.id === id);
    dispatch(addNewCommonProduct(selectedProduct));
  }

  return (
    <li>
      <Form.Check onChange={handleCheckboxChange} checked={isComplete} />
      <p
        className={
          isComplete ? "product-item product-item--done" : "product-item"
        }
      >
        {title}
        <Button
          variant="outline-success"
          onClick={handleSaveProductButtonClick}
        >
          Save product
        </Button>
      </p>
    </li>
  );
}

export default ProductItem;
