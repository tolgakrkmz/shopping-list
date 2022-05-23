import { useDispatch } from "react-redux";
import { toggleComplete } from "../redux/productSlice";
import { Form } from "react-bootstrap";

import "./ProductItem.css";

function ProductItem({ id, title, isComplete }) {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id, isComplete: !isComplete }));
  };

  return (
    <li>
      <Form.Check onClick={handleCheckboxClick} checked={isComplete} />
      <p className={isComplete && "product-done"}>{title}</p>
    </li>
  );
}

export default ProductItem;
