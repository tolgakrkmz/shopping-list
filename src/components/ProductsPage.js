import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCommonProduct, deleteProduct } from "../redux/productSlice";
import { db } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

function ProductsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const commonProducts = useSelector((state) => state.product.commonProducts);
  const userEmail = useSelector((state) => state.user.userEmail);

  // STEP 1: Fetch data from 'Products' collection in Firestore
  useEffect(() => {
    async function getCommonProduct() {
      let commonProductData = [];
      const q = query(
        collection(db, "products"),
        where("email", "==", userEmail)
      );
      const querySnapshot = await getDocs(q);
      let shallowCommonProduct = [...commonProductData];

      querySnapshot.forEach((doc) => {
        shallowCommonProduct.push(doc.data());
      });
      dispatch(fetchCommonProduct(shallowCommonProduct));
    }
    getCommonProduct();
  }, []);
  // STEP 2: Add 'Remove' button func.
  async function handleDeleteItemButtonCick(id) {
    await deleteDoc(doc(db, "products", id));
    dispatch(deleteProduct({ id: id }));
  }

  return (
    <>
      <Button variant="success" onClick={() => navigate("/addproduct")}>
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
