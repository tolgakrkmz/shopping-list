import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

function AddProductToList() {
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    if (value) {
      dispatch(
        addProduct({
          title: value,
        })
      );
    }
    setValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type you product"
          value={value || ""}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProductToList;
