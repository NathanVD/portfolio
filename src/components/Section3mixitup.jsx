import React, { useState, useEffect } from "react"; //, { useState, useEffect }
import mixitup from "mixitup";
import { projects } from "../assets/gallery";
import "../css/Section3.css";

export default props => {
  const [Zoom, setZoom] = useState("");
  const [Flipped, setFlipped] = useState("");
  const [Filter, setFilter] = useState("all");
  const [Projects, setProjects] = useState(projects);

  const renderProject = project => {
    return (
      <div
        key={project.id}
        id={project.id}
        data-ref="project"
        className={
          "card-container m-4 mix " +
          project.category +
          (Zoom === project.id ? " zoomIn" : "") +
          (Flipped === project.id ? " flipped" : "")
        }
        onMouseEnter={e => setZoom(e.currentTarget.id)}
        onMouseLeave={() => setZoom("")}
        onClick={e =>
          Flipped !== e.currentTarget.id
            ? setFlipped(e.currentTarget.id)
            : setFlipped("")
        }
      >
        <div className="front d-flex flex-column justify-content-between">
          <div className="image-area">
            <img
              src={project.src}
              className="card-image mb-2"
              alt={project.alt}
            />
            <h5 className="title text-center m-0">{project.name}</h5>
          </div>
          <p className="short-content">{project.description}</p>
          <p className="read-more">Flip for description...</p>
        </div>
        <div className="back">
          <p className="content">{project.description}</p>
        </div>
      </div>
    );
  };

  const mixer = mixitup(document.getElementById("project"), {
    data: { uidKey: "id" },
    render: { target: renderProject },
    selectors: {
      target: '[data-ref="project"]'
    }
  });

  window.mixer = mixer;

  return (
    <div id={props.id} className="sec3 p-5">
      <div className="row justify-items-between h-100 p-5">
        <div className="col-1 nav-col border border-right-0 mr-5 pt-3">
          <nav className="nav flex-column">
            <button
              className={
                "btn my-2 " + (Filter === "all" ? "btn-info" : "text-info")
              }
              onClick={() => setFilter("all")}
              data-filter="all"
            >
              All
            </button>
            <button
              className={
                "btn my-2 " +
                (Filter === "javascript" ? "btn-info" : "text-info")
              }
              onClick={() => setFilter("javascript")}
              data-filter=".javascript"
            >
              JavaScript
            </button>
            <button
              className={
                "btn my-2 " + (Filter === "react" ? "btn-info" : "text-info")
              }
              onClick={() => setFilter("react")}
              data-filter=".react"
            >
              React
            </button>
            <button
              className={
                "btn my-2 " + (Filter === "vue" ? "btn-info" : "text-info")
              }
              onClick={() => setFilter("vue")}
              data-filter=".vue"
            >
              VueJS
            </button>
          </nav>
        </div>
        <div className="col">
          <div
            className="container d-flex flex-wrap align-items-start w-100 h-100"
            data-ref="container"
          >
            {getProjects()}
          </div>
        </div>
      </div>
    </div>
  );
};
