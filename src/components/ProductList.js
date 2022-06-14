import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Form } from "react-bootstrap";
import { sortBy } from "lodash";

import "./ProductList.css";

function ProductList() {
  const productItem = useSelector((state) => state.product);

  function handleMarkAll() {
    console.log("Button pressed.");
  }

  return (
    <ul className="productUl">
      <Form.Check label="Mark All" onChange={handleMarkAll} />

      {sortBy(productItem, ["isComplete"]).map((product, idx) => (
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
