import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCommonProducts } from "../redux/productSlice";
import { db } from "../firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

function ProductsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const commonProducts = useSelector((state) => state.product.commonProducts);
  const userEmail = useSelector((state) => state.user.userEmail);

  // STEP 1: Fetch data from 'Products' collection from Firestore
  useEffect(() => {
    async function getCommonProduct() {
      dispatch(fetchCommonProducts(userEmail));
    }
    getCommonProduct();
  }, []);
  // STEP 2: Add 'Remove' button func.
  async function handleDeleteItemButtonCick(id) {
    await deleteDoc(doc(db, "products", id));
  }

  // STEP 3: Handle 'Add product' button click.
  function handleAddProductButtonClick() {
    navigate("/addproduct");
  }

  return (
    <>
      <Button variant="primary" onClick={handleAddProductButtonClick}>
        Add Product
      </Button>
      <ul>
        {commonProducts.map((product) => (
          <li key={product.id}>
            {product.title}
            {
              <Button
                onClick={() => handleDeleteItemButtonCick(product.id)}
                variant="danger"
              >
                Delete
              </Button>
            }
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
