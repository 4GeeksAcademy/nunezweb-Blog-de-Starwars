import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterCards = () => {
  return (
    <div className="card me-3" style={{ minWidth: '300px' }}>
      <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="mb-0">Gender: male</p>
        <p className="mb-0">Hair-Color: blond</p>
        <p className="mb-0">Eye-Color: blue</p>
        <div className="d-flex justify-content-between">
        <a href="#" className="mt-4 btn btn-outline-primary">
          Go somewhere
        </a>
        <i className="btn btn-outline-warning mt-4 far fa-heart " style={{fontSize: "22px"}}></i>
        </div>
      </div>
    </div>
  );
};

export default CharacterCards;