import { Link } from "react-router-dom";

export default function About() {
  return (
    <Link to="/home">
      <button type="button" className="btn btn-primary">
        Back to Home
      </button>
    </Link>
  );
}
