import React, { useState, useEffect } from "react"; //, { useState, useEffect }
import { projects } from "../assets/gallery";
import "../css/Section3.css";
import logo from "../assets/logo.svg";
import jsLogo from "../assets/javascript-logo.svg";
import reactLogo from "../assets/react_logo.svg";
import vueLogo from "../assets/Vue_Logo.svg";

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
    return Projects.map(({ id, name, description, src, alt, category }) => {
      return (
        <div
          key={id}
          id={id}
          className={
            "card-container m-4 " +
            (Zoom === id ? " zoomIn" : "") +
            (Flipped === id ? " flipped" : "")
          }
          onMouseEnter={e => setZoom(e.currentTarget.id)}
          onMouseLeave={() => setZoom("")}
          onClick={e =>
            Flipped !== e.currentTarget.id
              ? setFlipped(e.currentTarget.id)
              : setFlipped("")
          }
        >
          <div className="front">
            <div className="card-border">
              <div className="card-background">
                <div className="card-frame">
                  <div className="title-area">
                    <h6 className="title">{name}</h6>
                    <img src={logo} className="cost" alt="logo" />
                  </div>
                  <div className="image-area">
                    <img
                      src={src}
                      className="image"
                      alt={alt}
                      draggable="false"
                    />
                  </div>
                  <div className="type-area">
                    <p className="type">{category}</p>
                    <img
                      className="icon"
                      src={
                        category === "javascript"
                          ? jsLogo
                          : category === "react"
                          ? reactLogo
                          : vueLogo
                      }
                      alt="logo"
                      draggable="false"
                    />
                  </div>
                  <div className="text-area">
                    <p className="short-content">{description}</p>
                    <div className="flavor-text">
                      <hr />
                      <p className="read-more">Flip for description...</p>
                    </div>
                  </div>
                  <span className="rare"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="back">
            <div className="card-border">
              <div className="card-background">
                <p className="text-area">{description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div id={props.id} className="sec3 p-5">
      <div className="row justify-items-between h-100 p-5">
        <div className="col-1 nav-col border border-right-0 border-info mr-5 pt-3">
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
