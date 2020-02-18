import React from "react"; //, { useState }
import "../css/Section3.css";
import img1 from "../assets/rpg3.png";
import img2 from "../assets/rpg3c.png";

export default props => {
  return (
    <div
      id={props.id}
      className="sec3 d-flex justify-content-around align-items-center p-5"
    >
      <div className="card">
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};
