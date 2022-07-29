import { useDispatch } from "react-redux";
import React from "react";
import { toggleComplete, deleteProduct } from "../redux/productSlice";
import { Form } from "react-bootstrap";
import "./ProductItem.css";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Button from "react-bootstrap/Button";

function ProductItem({ id, title, isComplete }) {
  const dispatch = useDispatch();

  function handleCheckboxChange() {
    dispatch(toggleComplete({ id, isComplete: !isComplete }));
    const documentRef = doc(db, "shopping-lists", id);

    updateDoc(documentRef, {
      isComplete: !isComplete,
    });
  }

  async function handleRemoveItemButtonClick() {
    await deleteDoc(doc(db, "shopping-lists", id));
    dispatch(deleteProduct({ id: id }));
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
      {
        <Button variant="danger" onClick={handleRemoveItemButtonClick}>
          Delete
        </Button>
      }
    </li>
  );
}

export default ProductItem;
