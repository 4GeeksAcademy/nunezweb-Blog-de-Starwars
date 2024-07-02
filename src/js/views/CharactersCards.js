import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // Asegúrate de importar el contexto

const CharacterCards = () => {
  const { store, actions } = useContext(Context); // Usa useContext para obtener store y actions

  return (
    <div>
      {store.characterscards.map((item, index) => (
        <div key={index} className="card me-3" style={{ minWidth: '300px' }}>
          <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Character title</h5>
            <p className="mb-0">Gender: male</p>
            <p className="mb-0">Hair-Color: blond</p>
            <p className="mb-0">Eye-Color: blue</p>
            <div className="d-flex justify-content-between">
              <Link to="/characterdetails" className="mt-4 btn btn-outline-primary">
                Learn more!
              </Link>
              <i className="btn btn-outline-warning mt-4 far fa-heart" onClick={() => actions.favoriteName(item.name)} style={{ fontSize: "22px" }}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterCards;
