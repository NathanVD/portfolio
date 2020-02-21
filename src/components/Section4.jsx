import React from "react"; //, { useState, useEffect }
import $ from "jquery";
import "../css/Section4.css";

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
        scroll("section3");
      } else if (e.deltaY > 0) {
        scroll("section5");
      }
    }
  };

  return (
    <div
      id={props.id}
      className="section sec4 p-5"
      onWheel={getMouseDirection}
    ></div>
  );
};
