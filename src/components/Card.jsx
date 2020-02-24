import React, { useState } from "react"; //, { useState, useEffect }
import "../css/Card.css";
import logo from "../assets/logo.svg";
import jsLogo from "../assets/javascript-logo.svg";
import reactLogo from "../assets/react_logo.svg";
import vueLogo from "../assets/Vue_Logo.svg";
export default props => {
  const [Zoom, setZoom] = useState("");
  const [Flipped, setFlipped] = useState("");
  return (
    <div key={props.id}>
      <div
        id={props.id}
        className={
          "card-container m-4 " +
          (Zoom === props.id ? " zoomIn" : "") +
          (Flipped === props.id ? " flipped" : "")
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
                  <h6 className="title">{props.name}</h6>
                  <img src={logo} className="cost" alt="logo" />
                </div>
                <div className="image-area">
                  <img
                    src={props.src}
                    className="image"
                    alt={props.alt}
                    draggable="false"
                  />
                </div>
                <div className="type-area">
                  <p className="type">{props.category}</p>
                  <img
                    className="icon"
                    src={
                      props.category === "javascript"
                        ? jsLogo
                        : props.category === "react"
                        ? reactLogo
                        : vueLogo
                    }
                    alt="logo"
                    draggable="false"
                  />
                </div>
                <div className="text-area">
                  <p className="short-content">{props.description}</p>
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
              <p className="text-area">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
