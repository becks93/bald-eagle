import bio from "../images/image (3).jpeg";
import juvenile from "../images/juvenile.jpeg";
import React from "react";
import "../App.css";

function Anatomy() {
  return (
    <div className="App">
      <div class="container">
        <header className="App-header">
          <h1>Anatomy and Biology </h1>
          <p>
            <img src={bio} alt="logo" />
          </p>
          <p>Females are larger than males.</p>
          <p>
            Adult eagles have a white head and tail, yellow beaks and yellow
            eyes.
          </p>
          <p>
            Young eagles, called juveniles, are brown and larger in size than
            adults because of their longer feathers.
          </p>
          <img src={juvenile} alt="logo" />
          <p>Eagles in the wild live for around 15-25 years.</p>
          <p>
            The oldest known bald eagle in the wild was 37, and the oldest known
            eagle protected to live with humans was 50 years old!
          </p>
        </header>
      </div>
    </div>
  );
}

export default Anatomy;
