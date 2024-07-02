import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/details.css";

const CharacterDetails = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <img
              src="https://picsum.photos/800/600"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1>Luke Skywalker</h1>
            <p>
              Hunter is a strong and stoic soldier with a special set of skills.
              As the leader of the Bad Batch,—technically known as Clone Force
              99, a group formed as the result of Kaminoan experiments to create
              a specialist unit of clone commandos—Hunter has extraordinarily
              keen senses that give him an edge when tracking down his targets.
              But his allegiance has been tested in the aftermath of Order 66,
              and his duty is now to Clone Force 99 alone, including the newest
              member, young Omega.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <hr className="separator-red" />
        <div className="row text-center text-danger">
          <div className="col-2">
            <h2 className="fs-3">Name</h2>
            <p className="fs-5">Luke</p>
          </div>
          <div className="col-2">
            <h2 className="fs-3">Birth Year</h2>
            <p className="fs-5">35</p>
          </div>
          <div className="col-2">
            <h2 className="fs-3">Gender</h2>
            <p className="fs-5">Male</p>
          </div>
          <div className="col-2">
            <h2 className="fs-3">Height</h2>
            <p className="fs-5">10"</p>
          </div>
          <div className="col-2">
            <h2 className="fs-3">Skin Color</h2>
            <p className="fs-5">Brown</p>
          </div>
          <div className="col-2">
            <h2 className=" fs-3">Eye Color</h2>
            <p className="fs-5">Brown</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
