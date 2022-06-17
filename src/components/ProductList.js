import React from "react";
import { useSelector } from "react-redux";
// import ProductItem from "./ProductItem";
import { MemoizedProducts } from "./ProductItem";
import { Form } from "react-bootstrap";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { toggleCompleteAll } from "../redux/productSlice.js";

function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product);
  let isAllProductsComplete = true;

  //Make it with array methods

  if (productList.find((e) => e.isComplete === false)) {
    isAllProductsComplete = false;
  }

  function handleMarkAll() {
    dispatch(toggleCompleteAll());
  }

  function sortProductList(a, b) {
    if (a.isComplete < b.isComplete) {
      return -1;
    }
    if (a.isComplete > b.isComplete) {
      return 1;
    }
    return 0;
  }

  const arrayForSort = [...productList];

  return (
    <ul className="product-list">
      {productList.length > 0 && (
        <Form.Check
          label="Mark All"
          onChange={handleMarkAll}
          checked={isAllProductsComplete}
        />
      )}

      {arrayForSort.sort(sortProductList).map((product, idx) => (
        <MemoizedProducts
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
