import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { db } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewProduct } from "../redux/productSlice";

function ChooseProductModal({ closeModal }) {
  const [modalData, setModalData] = useState([]);
  const userEmail = useSelector((state) => state.user.userEmail);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProductsForModal() {
      const modalProducts = [];
      const q = query(
        collection(db, "products"),
        where("email", "==", userEmail)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        modalProducts.push(doc.data());
      });
      setModalData(modalProducts);
    }
    fetchProductsForModal();
  }, [modalData]);

  function handleAddFromProductsButtonClick(id) {
    const productInModal = modalData.find((product) => product.id === id);
    dispatch(addNewProduct(productInModal));
    closeModal(false);
  }

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Choose a product</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {modalData.map((product) => (
          <li key={product.id}>
            {product.title}
            {
              <Button
                onClick={() => handleAddFromProductsButtonClick(product.id)}
                variant="success"
              >
                Add to Shopping List
              </Button>
            }
          </li>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModal(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ChooseProductModal;
