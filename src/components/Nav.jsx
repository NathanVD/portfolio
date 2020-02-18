import React from "react"; //, { useState }
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/logo.svg";
import "../css/Nav.css";

export default () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
      <div className="container">
        <div className="navbar-brand d-flex align-items-center">
          <input
            type="image"
            src={logo}
            width="45"
            height="45"
            className="rotating"
            onClick={() => scroll.scrollToTop()}
            alt="hexa"
            id="logo"
          />
          <label htmlFor="logo" className="m-0 ml-2">
            Nathan Van Dyck
          </label>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link
              className="nav-item mx-2"
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About Me
            </Link>
            <Link
              className="nav-item mx-2"
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// <a className="nav-item nav-link" href="#section1">
//   About Me
// </a>
// <a className="nav-item nav-link" href="#section2">
//   Projects
// </a>
// <a className="nav-item nav-link" href="#section3">
//   Contact
// </a>
