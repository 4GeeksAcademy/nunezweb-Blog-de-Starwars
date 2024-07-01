import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCards from "./CharactersCards";

export const Home = () => (
  <div className="container mt-5">
    <div className="row justify-content-end">
      <div className="col-12">
        <div
          className="d-flex overflow-auto"
          style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
        >
          <CharacterCards />
          <CharacterCards />
          <CharacterCards />
          <CharacterCards />
          <CharacterCards />
          <CharacterCards />
          <CharacterCards />
          <CharacterCards />
          <CharacterCards />
          <CharacterCards />
          <CharacterCards />
          <CharacterCards />
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);
