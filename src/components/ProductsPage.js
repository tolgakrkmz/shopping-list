import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import {
  fetchCommonProducts,
  deleteCommonProduct,
} from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import "./ProductsPage.css";
import { Link } from "react-router-dom";

function ProductsPage() {
  const dispatch = useDispatch();
  const commonProducts = useSelector((state) => state.product.commonProducts);
  const userEmail = useSelector((state) => state.user.userEmail);

  useEffect(() => {
    async function getCommonProducts() {
      dispatch(fetchCommonProducts(userEmail));
    }
    getCommonProducts();
  }, []);

  function handleDeleteItemButtonClick(id) {
    return function () {
      return dispatch(deleteCommonProduct(id));
    };
  }

  return (
    <>
      <Link to="/products/add">
        <Button>Add Product</Button>
      </Link>

      <ul className="common-product-list">
        {commonProducts.map((product) => (
          <li key={product.id}>
            {product.title}
            <Button
              onClick={handleDeleteItemButtonClick(product.id)}
              variant="danger"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
