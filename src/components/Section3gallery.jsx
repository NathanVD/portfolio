import React, { useState } from "react"; //, { useState }
import { projet1, projet2, projet3 } from "../assets/gallery";
import "../css/Section3.css";

const projects = [
  {
    id: "item1",
    src: projet1,
    alt: "Geeks of Legends"
  },
  {
    id: "item2",
    src: projet2,
    alt: "Pierre Papier Ciseaux"
  },
  {
    id: "item3",
    src: projet1,
    alt: "Geeks of Legends"
  },
  {
    id: "item4",
    src: projet2,
    alt: "Pierre Papier Ciseaux"
  },
  {
    id: "item5",
    src: projet3,
    alt: "RPG Vue"
  }
];

export default props => {
  const [Info, setInfo] = useState("");

  let getProjects = () => {
    return projects.map(({ id, src }) => {
      return (
        <div
          id={id}
          className="galleryItem"
          onMouseEnter={e => setInfo(e.currentTarget.id)}
          onMouseLeave={() => setInfo("")}
        >
          <img
            src={src}
            className={Info === id ? "galleryImg zoomIn" : "galleryImg zoomOut"}
            alt="Geeks of Legends"
          />
          <div className="overlay"></div>
        </div>
      );
    });
  };

  return (
    <div id={props.id} className="sec3 p-5">
      <div className="gallery position-relative w-100 h-100 p-5">
        {getProjects()}
      </div>
    </div>
  );
};
