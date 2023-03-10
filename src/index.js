import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Diet,
  ImageGallery,
  Anatomy,
  Behavior,
  Habitat,
  ScientificName,
  Lifecycle,
} from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/imagegallery" element={<ImageGallery />} />
        <Route path="/anatomy" element={<Anatomy />} />
        <Route path="/behavior" element={<Behavior />} />
        <Route path="/habitat" element={<Habitat />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        <Route path="/scientificname" element={<ScientificName />} />
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);
