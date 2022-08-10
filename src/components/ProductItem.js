import { useDispatch } from "react-redux";
import React from "react";
import { toggleCompleteProduct } from "../redux/productSlice";
import { Form } from "react-bootstrap";
import "./ProductItem.css";

function ProductItem({ id, title, isComplete }) {
  const dispatch = useDispatch();

  function handleCheckboxChange() {
    dispatch(toggleCompleteProduct({ id, isComplete }));
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
      </p>
    </li>
  );
}

export default ProductItem;
