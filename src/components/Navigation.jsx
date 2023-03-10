import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div
      className="navigation"
      style={{
        background: "white",
        color: "black",
        margin: "0px 10px 0px 5px",
      }}
    >
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div
            style={{
              display: "flex",
              "justify-content": "space-between",
              "font-size": "30px",
            }}
          >
            <NavLink className="navbar-brand" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/diet">
              Diet
            </NavLink>
            <NavLink className="nav-link" to="/anatomy">
              Anatomy
            </NavLink>
            <NavLink className="nav-link" to="/behavior">
              Behavior
            </NavLink>
            <NavLink className="nav-link" to="/habitat">
              Habitat
            </NavLink>
            <NavLink className="nav-link" to="/lifecycle">
              Lifecycle
            </NavLink>
            {/* <NavLink className="nav-link" to="/scientificname">
              Scientific Name and Classification
            </NavLink> */}
            <NavLink className="nav-link" to="/imagegallery">
              Image Gallery
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
