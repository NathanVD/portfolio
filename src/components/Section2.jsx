import React, { useState, useEffect } from "react"; //, { useState }
import $ from "jquery";
import "../css/Section2.css";

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
        scroll("section1");
      } else if (e.deltaY > 0) {
        scroll("section3");
      }
    }
  };

  /*
  -
  -  Compteur de secondes
  - 
  */

  const [date, setDate] = useState(new Date());
  const start = new Date(2019, 11, 28, 16, 14);
  let hoursOfCode = Math.floor((date.getTime() - start.getTime()) / 1000);
  useEffect(() => {
    let interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <div id={props.id} className="section sec2 p-5" onWheel={getMouseDirection}>
      <div className="container text-white d-flex justify-content-between my-5 py-5">
        <div className="d-flex flex-column align-items-center">
          <i className="fas fa-project-diagram fa-5x"></i>
          <p className="big text-info my-3">20</p>
          <p className="upper">projects</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="fas fa-book fa-5x"></i>
          <p className="big text-info my-3">7</p>
          <p className="upper">repositories</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="fas fa-laptop-code fa-5x"></i>
          <p className="big text-info my-3">157560</p>
          <p className="upper">Lines of code</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="fas fa-history fa-5x"></i>
          <p className="big text-info my-3">{hoursOfCode}</p>
          <p className="upper">seconds of code</p>
        </div>
      </div>
    </div>
  );
};
