import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/text-editor" className="nav-link">
                Text Editor
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${ props.mode === "light" ? "dark" : "light" }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleLightDarkMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {`Enable ${props.mode === "light" ? "dark" : "light"} mode`}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Types safety for properties.
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

// isRequired will throw an error if the default properties are not set (and the value is undefined )

// Adding default properties (Assigning default values).
NavBar.defaultProps = {
  title: "Set title here",
};
