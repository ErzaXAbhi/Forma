import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/Hero">
              <strong>Forma Architects</strong>
            </Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                onClick={props.darkMode}
              />
              <label
                className={`btn btn-${
                  props.mode === "light" ? "light" : "dark"
                }`}
                for="btnradio1"
              >
                <i className="fa-solid fa-moon"></i>
              </label>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.func.isRequired,
};

export default Navbar;
