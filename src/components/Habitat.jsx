import React from "react";
import nest from "../images/nest.jpeg";
import cartoon from "../images/cartoon.png";
import "../App.css";

function Habitat() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Habitat </h1>
        <img src={nest} alt="logo" />
        <p>
          Bald eagles live within a few miles of water because that is where
          they find their food!
        </p>

        <p>
          They typically nest in large trees, cliffs, and more! They will often
          gather together.
        </p>
        <img src={cartoon} alt="logo" />
      </header>
    </div>
  );
}

export default Habitat;
