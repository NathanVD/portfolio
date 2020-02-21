import React from "react";
import "../css/Skills.css";

export default () => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link border border-bottom-0 active"
            id="nav-front-tab"
            data-toggle="tab"
            href="#nav-front"
            role="tab"
          >
            Front End{" "}
            <span className="badge badge-info align-text-bottom">4</span>
          </a>
          <a
            className="nav-item nav-link border border-bottom-0"
            id="nav-back-tab"
            data-toggle="tab"
            href="#nav-back"
            role="tab"
          >
            Back End{" "}
            <span className="badge badge-info align-text-bottom">2</span>
          </a>
        </div>
      </nav>
      <div className="tab-content skills-box" id="nav-tabContent">
        <div
          className="tab-pane fade show active border border-top-0 p-3"
          id="nav-front"
          role="tabpanel"
        >
          <h6>HTML / CSS / Bootstrap</h6>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated w-100"
              role="progressbar"
            >
              100%
            </div>
          </div>
          <h6>JavaScript</h6>
          <div className="progress bg-white mb-2">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success w-95"
              role="progressbar"
            >
              95%
            </div>
          </div>
          <h6>React</h6>
          <div className="progress bg-white mb-2">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success w-80"
              role="progressbar"
            >
              80%
            </div>
          </div>
          <h6>VueJS</h6>
          <div className="progress bg-white mb-2">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success w-85"
              role="progressbar"
            >
              85%
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade border border-top-0 p-3"
          id="nav-back"
          role="tabpanel"
        >
          <h6>Lorem</h6>
          <div className="progress bg-white mb-2">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning w-50"
              role="progressbar"
            >
              50%
            </div>
          </div>
          <h6>Lorem</h6>
          <div className="progress bg-white mb-2">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-danger w-25"
              role="progressbar"
            >
              25%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
