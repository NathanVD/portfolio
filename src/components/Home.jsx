import React from "react"; //, { useState }
import $ from "jquery";
import "../css/Home.css";

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
      if (e.deltaY > 0) {
        scroll("section1");
      }
    }
  };

  return (
    <div
      id={props.id}
      className="d-flex align-items-center justify-content-center"
      onWheel={getMouseDirection}
    >
      <div className="switch">
        <div className="switch_container">
          <p className="switch_container_text">I am</p>
          <ul className="switch_container_list">
            <li className="switch_container_list_item">a geek.</li>
            <li className="switch_container_list_item">a web developer.</li>
            <li className="switch_container_list_item">Nathan Van Dyck.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
