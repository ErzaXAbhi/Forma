import React, { useState } from "react";
import heroImage from "./images/heroImage.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Hero = (props) => {
  const [myStyle, setMyStyle] = useState({
    color: "#0D3C73",
    backgroundColor: "",
  });

  return (
    <>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/Hero" style={myStyle}>
                <strong>Forma Architects</strong>
              </Link>
            </li>
            <li>
              <Link to="/Contact" style={myStyle}>
                Contact Us
              </Link>
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
                  className={`btn btn-secondary rounded-circle btn-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                  htmlFor="btnradio1"
                >
                  <i className="fa-solid fa-moon"></i>
                </label>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="heading">
        <h1 style={myStyle}>
          forma <br />
          <span>Architects</span>
        </h1>
        <span className="copy" style={myStyle}>
          &copy;
        </span>
        <span className="copy-text" style={myStyle}>
          Interior & Exterior <br /> Design
        </span>
      </div>
      <img src={heroImage} alt="" className="hero-img" loading="lazy" />
      <div className="container my-5">
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/" className="btn btn-dark">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  darkMode: PropTypes.func.isRequired,
};

export default Hero;
