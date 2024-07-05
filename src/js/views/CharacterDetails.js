import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/details.css";

const CharacterDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  // const uidDetails = store.storeClicUid;
  // const uidCharacterDetails = store.detailedCharacters[uidDetails] || {};
  // const uidCharacterDescription = store.descriptionCharacters[uidDetails] || {};

  useEffect (() => {
    if (params.id) {
      const id = Number(params.id);
      const existingId = store.

    }
  });

  // useEffect(() => {
  //   if (!uidDetails) {
  //     console.error("No character UID found in store");
  //   }
  // }, [uidDetails]);

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${uidDetails}.jpg`}
              className="card-img-top"
              alt="Star Wars"
            />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1>{uidCharacterDetails.name}</h1>
            <p>{uidCharacterDescription}</p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <hr className="separator-red" />
        <div className="row text-center text-danger">
          <div className="col-2">
            <h2 className="fs-3">Name</h2>
            <p className="fs-5">{uidCharacterDetails.name}</p>
          </div>
          <div className="col-2">
            <h2 className="fs-3">Birth Year</h2>
            <p className="fs-5">{uidCharacterDetails.birth_year}</p>
          </div>
          <div className="col-2">
            <h2 className="fs-3">Gender</h2>
            <p className="fs-5">{uidCharacterDetails.gender}</p>
          </div>
          <div className="col-2">
            <h2 className="fs-3">Height</h2>
            <p className="fs-5">{uidCharacterDetails.height}</p>
          </div>
          <div className="col-2">
            <h2 className="fs-3">Skin Color</h2>
            <p className="fs-5">{uidCharacterDetails.skin_color}</p>
          </div>
          <div className="col-2">
            <h2 className="fs-3">Eye Color</h2>
            <p className="fs-5">{uidCharacterDetails.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
