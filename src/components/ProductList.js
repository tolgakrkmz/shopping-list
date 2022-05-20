import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function ProductList() {
  const productItem = useSelector((state) => state.product);

  return (
    <ul>
      {productItem.map((product, idx) => (
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
