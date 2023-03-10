import one from "../images/1.png";
import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <div class="container">
        <header className="App-header">
          <h1>Bald Eagle</h1>
          <img src={one} alt="logo" />
          <h3>Let's learn about bald eagles!</h3>
          <h4>
            Click a button at the top to learn more about diet, anatomy,
            behavior, habitat, and lifecycle.
          </h4>
        </header>
      </div>
    </div>
  );
}

export default Home;
