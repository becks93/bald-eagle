import React from "react";
import "../App.css";

function Quiz() {
  return (
    <div className="App">
      <div class="container">
        <header className="App-header">
          <h1>Quiz </h1>
          <p>
            Take a look around this website and write down your answers on a
            piece of paper!
          </p>
          <ul>
            <li>
              True or False: A male bald eagle is larger than a female bald
              eagle
            </li>
            <li>True or False: Bald eagles are good swimmers</li>
            <li>True or False: Bald eagles have no feathers on their head</li>
            <li>True or False: Bald eagles eat large animals</li>
            <li>True or False: Bald eagles live up to 100 years</li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Quiz;
