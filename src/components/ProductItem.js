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
      <span>
        <Form.Check onClick={handleCheckboxClick} defaultChecked={isComplete} />
        <p className={isComplete ? "product-done" : null} id="productItem">
          {title}
        </p>
      </span>
    </li>
  );
}

export default ProductItem;
