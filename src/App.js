import React from "react";
import logo from "./assets/logo.svg";
import "./css/App.min.css";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";

function App() {
  return (
    <div className="App">
      <span name="top" />
      <header>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#top">
              <img
                src={logo}
                width="45"
                height="45"
                className="rotating mr-2"
                alt="engrenage"
              />
              Nathan Van Dyck
            </a>
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
                <a className="nav-item nav-link active" href="#header">
                  Header <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link" href="#section1">
                  About Me
                </a>
                <a className="nav-item nav-link" href="#section2">
                  Projects
                </a>
                <a className="nav-item nav-link" href="#section3">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* ----------------------------------------------------------------------------------------------- */}

        <section id="header">
          <Header />
        </section>
        <section id="section1">
          <Section1 />
        </section>
        <section id="section2">
          <Section2 />
        </section>
        <section id="section3"></section>
        <footer id="footer">Copyright ©2020 Moi. All Rights Reserved</footer>
      </header>
    </div>
  );
}

export default App;
