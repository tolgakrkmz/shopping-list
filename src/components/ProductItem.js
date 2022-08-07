import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { toggleComplete, addCommonProduct } from "../redux/productSlice";
import { Form } from "react-bootstrap";
import "./ProductItem.css";
import { doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Button from "react-bootstrap/Button";

function ProductItem({ id, title, isComplete }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.shoppingList);

  function handleCheckboxChange() {
    dispatch(toggleComplete({ id, isComplete: !isComplete }));
    const documentRef = doc(db, "shopping-lists", id);

    updateDoc(documentRef, {
      isComplete: !isComplete,
    });
  }

  async function handleSaveProductButtonClick(id) {
    const selectedProduct = productList.find((product) => product.id === id);
    console.log(selectedProduct.id);

    await setDoc(doc(db, "products", selectedProduct.id), selectedProduct);
    dispatch(addCommonProduct(selectedProduct));
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
        {
          <Button
            variant="outline-success"
            onClick={() => handleSaveProductButtonClick(id)}
          >
            Save product
          </Button>
        }
      </p>
    </li>
  );
}

export default ProductItem;
