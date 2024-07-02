import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/navbar.css";
import logoStarWars from "../../img/logosw.png";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const navigate = useNavigate();
	const {store,actions} = useContext(Context);


  return (
    <nav className="navbar navbar-dark bg-dark m-0 py-3">
      <div className="container-fluid d-flex">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/">
		  <img src={logoStarWars} alt="Star Wars" style={{ width: '120px' }} />
          </Link>
          <div className="dropdown">
            <button
              className="navbarButton btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites (0)
            </button>
            <ul className="dropdown-menu justify-content-between">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
	  <div>
                <div className="btn-group botonFav">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos {store.fav.length}
                    </button>
                    <ul className="dropdown-menu">
                        {store.favoriteStore.map((item, index) => (
                            <li key={index}>
                                <a className="dropdown-item">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    </nav>
  );
};
