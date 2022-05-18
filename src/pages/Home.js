import React from "react";

export default function () {
  return (
    <div>
      <div className="card" style={{ width: 18 + "rem" }}>
        <div className="card-body">
          <h5 className="card-title">First Bootstrap card</h5>
          <p className="card-text">Go to About page.</p>
          <a href="about" className="btn btn-primary">
            Go to about page
          </a>
        </div>
      </div>
    </div>
  );
}
