import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Form } from "react-bootstrap";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { toggleCompleteAll } from "../redux/productSlice.js";
import React, { useMemo } from "react";

function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.shoppingList);
  const isAllProductsComplete = productList.every(
    (value) => value.isComplete === true
  );

  function handleMarkAll() {
    dispatch(toggleCompleteAll());
  }

  const sortedProductList = useMemo(
    () =>
      [...productList].sort((a, b) => (a.isComplete > b.isComplete ? 1 : -1)),
    [productList]
  );

  return (
    <ul className="product-list">
      {productList.length > 0 && (
        <Form.Check
          label="Mark All"
          onChange={handleMarkAll}
          checked={isAllProductsComplete}
        />
      )}
      {sortedProductList.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          isComplete={product.isComplete}
        />
      ))}
    </ul>
  );
}

export default ProductList;
