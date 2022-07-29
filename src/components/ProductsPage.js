import ProductList from "./ProductList";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function ProductsPage() {
  const productList = useSelector((state) => state.product.shoppingList);
  console.log(productList);
  return (
    <>
      <h1>Test</h1>
    </>
  );
}

export default ProductsPage;
