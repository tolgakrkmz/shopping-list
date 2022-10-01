import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../redux/productSlice";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { nanoid } from "nanoid";

import "./ProductAddForm.css";

function ProductAddForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.userEmail);

  function handleSubmit(event) {
    event.preventDefault();

    if (value !== "") {
      const productItem = {
        id: nanoid(),
        title: value,
        isComplete: false,
        email: userEmail,
      };
      dispatch(addNewProduct(productItem));
      setValue("");
    }
  }

  return (
    <InputGroup size="sm" className="mb-3">
      <FormControl
        aria-label="Small"
        placeholder="Type your product"
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
