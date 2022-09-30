import { useDispatch, useSelector } from "react-redux";
import React from "react";
<<<<<<< HEAD
import { toggleComplete, addCommonProduct } from "../redux/productSlice";
import { Form } from "react-bootstrap";
import "./ProductItem.css";
import { doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Button from "react-bootstrap/Button";
=======
import { toggleCompleteProduct } from "../redux/productSlice";
import { Form } from "react-bootstrap";
import "./ProductItem.css";
>>>>>>> feature/persistent-shopping-list

function ProductItem({ id, title, isComplete }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.shoppingList);

  function handleCheckboxChange() {
    dispatch(toggleCompleteProduct({ id, isComplete }));
  }

  async function handleSaveProductButtonClick(id) {
    const selectedProduct = productList.find((product) => product.id === id);
    console.log(selectedProduct);
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
