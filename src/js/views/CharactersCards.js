import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterCards = () => {
    const { store, actions } = useContext(Context);

    const extractHomeworldNumber = (url) => {
        const matches = url.match(/(\d+)\/$/);
        return matches ? matches[1] : null;
    };

    return (
        <div className="d-flex overflow-auto">
            {store.characterscards && store.characterscards.length > 0 ? (
                store.characterscards.map((item, index) => (
                    <div key={index} className="card me-3" style={{ minWidth: '300px' }}>
                        <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="mb-0">Gender: {item.gender}</p>
                            <p className="mb-0">Hair-Color: {item.hair_color}</p>
                            <p className="mb-0">Eye-Color: {item.eye_color}</p>
                            <div className="d-flex justify-content-between">
                                <Link to={`/characterdetails/${extractHomeworldNumber(item.homeworld)}`} className="mt-4 btn btn-outline-primary">
                                    Learn more!
                                </Link>
                                <i className="btn btn-outline-warning mt-4 far fa-heart" onClick={() => actions.favorite(item.name)} style={{ fontSize: "22px" }}></i>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No characters available</p>
            )}
        </div>
    );
};

export default CharacterCards;
