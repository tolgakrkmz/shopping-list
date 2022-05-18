import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">First Bootstrap card</h5>
          <p className="card-text">Go to About page.</p>
          <Link to="/about" className="btn btn-primary">
            Go to About page
          </Link>
        </div>
      </div>
    </div>
  );
}
