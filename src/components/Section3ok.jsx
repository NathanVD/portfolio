import React, { useState, useEffect } from "react"; //, { useState, useEffect }
import { projects } from "../assets/gallery";
import "../css/Section3.css";

export default props => {
  const [Zoom, setZoom] = useState("");
  const [Flipped, setFlipped] = useState("");
  const [Filter, setFilter] = useState("all");
  const [Projects, setProjects] = useState(projects);

  useEffect(() => {
    switch (Filter) {
      case "javascript":
        let filteredJS = projects.filter(project => {
          return project.category === "javascript";
        });
        setProjects(filteredJS);
        break;
      case "react":
        let filteredReact = projects.filter(project => {
          return project.category === "react";
        });
        setProjects(filteredReact);
        break;
      case "vue":
        let filteredVue = projects.filter(project => {
          return project.category === "vue";
        });
        setProjects(filteredVue);
        break;
      default:
        setProjects(projects);
        break;
    }
  }, [Filter]);

  let getProjects = () => {
    // return Projects.map(({ id, name, description, src, alt, category }) => {
    return Projects.map(({ id, name, description, src, alt }) => {
      return (
        <div
          key={id}
          id={id}
          className={
            "card-container m-4 mix " +
            (Zoom === id ? " zoomIn" : "") +
            (Flipped === id ? " flipped" : "")
            //(Filter === category || Filter === "all" ? " fade" : "")
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
              <img src={src} className="card-image mb-2" alt={alt} />
              <h5 className="title text-center m-0">{name}</h5>
            </div>
            <p className="short-content">{description}</p>
            <p className="read-more">Flip for description...</p>
          </div>
          <div className="back">
            <p className="content">{description}</p>
          </div>
        </div>
      );
    });
  };

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
          <div className="gallery d-flex flex-wrap align-items-start w-100 h-100">
            {getProjects()}
          </div>
        </div>
      </div>
    </div>
  );
};
