import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Contact = (props) => {
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
      <div className="container my-5">
        <h1>Contact Us</h1>
        <span className="placeholder col-6"></span>
        <span className="placeholder w-75"></span>
        <span className="placeholder"></span>
        <div className="mb-3 my-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-dark" type="submit">
            Submit form
          </button>
        </div>
      </div>
    </>
  );
};

Contact.propTypes = {
  darkMode: PropTypes.func.isRequired,
};

export default Contact;
