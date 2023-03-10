import React from "react";
import sleep from "../images/sleep.jpeg";
// import hunting from "../images/hunting.jpeg";
import "../App.css";

function Behavior() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Behavior </h1>
        <p>
          Eagles sleep standing. They stay atop a tree branch with their heads
          tucked into their feathers. They sleep more at night.
        </p>
        <img src={sleep} alt="logo" />
        <p>The Bald Eagle has no natural predators.</p>

        <p>Eagles usually hunt for food or steal food from other predators.</p>
      </header>
    </div>
  );
}

export default Behavior;
