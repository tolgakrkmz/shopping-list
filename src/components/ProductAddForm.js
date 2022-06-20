import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import "./ProductAddForm.css";

function ProductAddForm() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    if (value !== "") {
      dispatch(
        addProduct({
          title: value,
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
      <Button onClick={handleSubmit}>Add</Button>
    </InputGroup>
  );
}

export default ProductAddForm;
