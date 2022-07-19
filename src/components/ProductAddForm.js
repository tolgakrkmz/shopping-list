import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productSlice";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";

import "./ProductAddForm.css";

function ProductAddForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.userEmail);

  async function handleSubmit(event) {
    event.preventDefault();

    if (value !== "") {
      const productItem = {
        id: nanoid(),
        title: value,
        isComplete: false,
        email: userEmail,
      };
      await setDoc(doc(db, "shopping-lists", productItem.id), productItem);
      dispatch(
        addProduct({
          productItem,
        })
      );
      setValue("");
    }
  }

  return (
    <InputGroup size="sm" className="mb-3">
      <FormControl
        aria-label="Small"
        placeholder="Type you product"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={handleSubmit} disabled={!value}>
        Add
      </Button>
    </InputGroup>
  );
}

export default ProductAddForm;
