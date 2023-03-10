import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
//import bio from "./image (3).png";
import React from "react";
import "../App.css";

function ImageGallery() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Gallery </h1>
        <img src={one} alt="logo" />
        <img src={two} alt="logo" />
        <img src={three} alt="logo" />
        <img src={four} alt="logo" />
        <img src={five} alt="logo" />
      </header>
    </div>
  );
}

export default ImageGallery;
