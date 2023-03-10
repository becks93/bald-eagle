import React from "react";
import fish from "../images/fish.jpeg";
import "../App.css";

function Diet() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Diet </h1>
        <img src={fish} alt="logo" />
        <p>
          Bald eagles eat meat! They eat fish, small birds, and other small
          animals.
        </p>
        <p>
          To hunt fish, the eagle swoops down over the water and grabs the fish
          out of the water with its talons.
        </p>
        <p>
          Eagles get their food by fishing or stealing their food from other
          animals.
        </p>
      </header>
    </div>
  );
}

export default Diet;
