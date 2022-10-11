import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addNewProduct } from "../redux/productSlice";
import { useEffect } from "react";
import { fetchProductsForModal } from "../redux/productSlice";

function ChooseProductModal({ setIsOpenModal }) {
  const modalProducts = useSelector((state) => state.product.modalProducts);
  const userEmail = useSelector((state) => state.user.userEmail);
  const dispatch = useDispatch();

  function handleAddFromProductsButtonClick(id) {
    const productInModal = modalProducts.find((product) => product.id === id);
    return function () {
      dispatch(addNewProduct(productInModal));
      setIsOpenModal(false);
    };
  }

  useEffect(() => {
    dispatch(fetchProductsForModal(userEmail));
  }, []);

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Choose a product</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {modalProducts.map((product) => (
          <li key={product.id}>
            {product.title}
            <Button
              onClick={handleAddFromProductsButtonClick(product.id)}
              variant="success"
            >
              Add to Shopping List
            </Button>
          </li>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsOpenModal(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ChooseProductModal;
