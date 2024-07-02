import React from "react";
import { Link } from "react-router-dom";

const StarshipsCards = () => {
  return (
    <div className="card me-3" style={{ minWidth: '300px' }}>
      <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Startships title</h5>
        <p className="mb-0">Starship: A-wing Fighter</p>
        <div className="d-flex justify-content-between">
          <Link to="/starshipdetails" className="mt-4 btn btn-outline-primary">
            Learn more!
          </Link>
          <i className="btn btn-outline-warning mt-4 far fa-heart" style={{ fontSize: "22px" }}></i>
        </div>
      </div>
    </div>
  );
};

export default StarshipsCards;
