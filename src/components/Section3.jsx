import React, { useState, useEffect } from "react"; //, { useState, useEffect }
import $ from "jquery";
import { projects } from "../assets/gallery";
import "../css/Section3.css";
import Card from "./Card";

export default props => {
  /*
  -
  -  jQuery scroll page
  - 
  */

  let scrolling = false;

  let scroll = dest => {
    scrolling = true;
    var div = $("div[id='" + dest + "']");
    $("html,body").animate(
      { scrollTop: div.offset().top },
      "slow",
      () => (scrolling = false)
    );
  };

  let getMouseDirection = e => {
    if (!scrolling) {
      if (e.deltaY < 0) {
        scroll("section2");
      } else if (e.deltaY > 0) {
        scroll("section4");
      }
    }
  };

  /*
  -
  -  Gallerie + effets
  - 
  */

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
        <Card
          key={id}
          id={id}
          name={name}
          description={description}
          src={src}
          alt={alt}
          category={category}
        />
      );
    });
  };

  return (
    <div
      id={props.id}
      className="section sec3 py-5"
      onWheel={getMouseDirection}
    >
      <div className="row justify-items-between w-100 p-4 p-sm-5">
        <div className="col-3 col-lg-1 nav-col border border-right-0 border-info mr-lg-5 pt-3">
          <nav className="nav flex-column">
            <button
              className={
                "btn w-100 my-2 " +
                (Filter === "all" ? "btn-info" : "text-info")
              }
              onClick={() => setFilter("all")}
              data-filter="all"
            >
              All
            </button>
            <button
              className={
                "btn w-100 my-2 px-1 " +
                (Filter === "javascript" ? "btn-info" : "text-info")
              }
              onClick={() => setFilter("javascript")}
              data-filter=".javascript"
            >
              <i className="fab fa-js"></i>
              <span className="d-none d-lg-inline ml-1">JavaScript</span>
            </button>
            <button
              className={
                "btn w-100 my-2 " +
                (Filter === "react" ? "btn-info" : "text-info")
              }
              onClick={() => setFilter("react")}
              data-filter=".react"
            >
              <i className="fab fa-react"></i>
              <span className="d-none d-lg-inline ml-1"> React</span>
            </button>
            <button
              className={
                "btn w-100 my-2 " +
                (Filter === "vue" ? "btn-info" : "text-info")
              }
              onClick={() => setFilter("vue")}
              data-filter=".vue"
            >
              <i className="fab fa-vuejs"></i>
              <span className="d-none d-lg-inline ml-1">VueJS</span>
            </button>
          </nav>
        </div>
        <div className="col-9 col-lg-10 gal-col">
          <div
            id="gallery"
            className="gallery d-flex flex-wrap justify-content-center justify-content-lg-start align-items-start"
          >
            {getProjects()}
          </div>
        </div>
      </div>
    </div>
  );
};
