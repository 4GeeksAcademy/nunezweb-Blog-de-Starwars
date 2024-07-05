import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterCards = () => {
  const { store, actions } = useContext(Context);

  const handleLearnMoreClick = (uid) => {
    actions.getStoreClicUid(uid);
  };

  return (
    <div className="d-flex overflow-auto">
      {store.characterscards && store.characterscards.length > 0 ? (
        store.characterscards.map((item, index) => {
          const details = store.detailedCharacters[item.uid] || {};
          console.log("Constante details:", store.gender);
          return (
            <div
              key={index}
              className="card me-3"
              style={{ minWidth: "300px" }}
            >
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                className="card-img-top"
                alt="Star Wars"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="mb-0">Gender: {details.gender}</p>
                <p className="mb-0">Hair-Color: {details.hair_color}</p>
                <p className="mb-0">Eye-Color: {details.eye_color}</p>
                <div className="d-flex justify-content-between">
                  <Link
                    to={`/characterdetails/${item.uid}`}
                    onClick={() => handleLearnMoreClick(item.uid)}
                    className="mt-4 btn btn-outline-primary"
                  >
                    Learn more!
                  </Link>
                  <i
                    className="btn btn-outline-warning mt-4 far fa-heart"
                    onClick={() => actions.favorite(item.name)}
                    style={{ fontSize: "22px" }}
                  ></i>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No characters available</p>
      )}
    </div>
  );
};

export default CharacterCards;
