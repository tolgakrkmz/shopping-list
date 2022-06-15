import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Form } from "react-bootstrap";
import { sortBy } from "lodash";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { toggleCompleteAll } from "../redux/productSlice.js";

function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product);
  let isCheckAll = true;

  for (let i = 0; i < productList.length; i++) {
    if (!productList[i].isComplete) {
      isCheckAll = false;
    }
  }

  function handleMarkAll() {
    dispatch(toggleCompleteAll());
  }
  return (
    <ul className="productUl">
      {productList.length > 0 && (
        <Form.Check
          label="Mark All"
          onChange={handleMarkAll}
          checked={isCheckAll}
        />
      )}

      {sortBy(productList, ["isComplete"]).map((product, idx) => (
        <ProductItem
          key={idx}
          id={product.id}
          title={product.title}
          isComplete={product.isComplete}
        />
      ))}
    </ul>
  );
}

export default ProductList;
