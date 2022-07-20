import { useDispatch } from "react-redux";
import React from "react";
import { toggleComplete } from "../redux/productSlice";
import { Form } from "react-bootstrap";
import "./ProductItem.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function ProductItem({ id, title, isComplete }) {
  const dispatch = useDispatch();

  function handleCheckboxChange() {
    dispatch(toggleComplete({ id, isComplete: !isComplete }));
    const documentRef = doc(db, "shopping-lists", id);

    updateDoc(documentRef, {
      isComplete: !isComplete,
    });
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
