import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addNewCommonProduct } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";

function AddProductPage() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.user.userEmail);

  async function handleAddProductButtonClick(e) {
    e.preventDefault();

    if (title !== "") {
      const commonProduct = {
        id: nanoid(),
        title: title,
        email: userEmail,
      };
      await dispatch(addNewCommonProduct(commonProduct));
      setTitle("");
      navigate("/products");
    }
  }

  return (
    <InputGroup size="sm" className="mb-3">
      <FormControl
        aria-label="Small"
        placeholder="Type your product"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Button onClick={handleAddProductButtonClick} disabled={!title}>
        Add
      </Button>
    </InputGroup>
  );
}

export default AddProductPage;
