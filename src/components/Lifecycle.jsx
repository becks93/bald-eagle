import React from "react";
import baby from "../images/baby.jpeg";
import "../App.css";

function Lifecycle() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lifecycle of an Eagle </h1>
        <p>Bald eagles are mature at four or five years of age. </p>
        <p>
          {" "}
          When they are old enough to lay eggs, they often return to the area
          where they were born.{" "}
        </p>
        <p> They lay between 1 & 3 eggs at a time.</p>
        <p>
          Bald eagles build their nests by mid-February, and usually lay their
          eggs by the end of February.
        </p>
        <img src={baby} alt="logo" />
        <p>
          The young leave their nests at anywhere from 8 to 14 weeks of age, but
          usually stick around pretty close for 6 more weeks!
        </p>
        <p>
          After that they'll start spreading out on their until they become
          adults.
        </p>
      </header>
    </div>
  );
}

export default Lifecycle;
