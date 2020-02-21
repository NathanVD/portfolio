import React from "react"; //, { useState }
import $ from "jquery";
import "../css/Footer.css";

export default props => {
  /*
  -
  -  jQuery scroll page
  - 
  */
  let scrolling = false;
  let fullFooter = false;

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
        if (fullFooter) {
          scroll("section5");
          fullFooter = false;
        } else scroll("section4");
      } else if (e.deltaY > 0) {
        fullFooter = true;
        scroll("footer");
      }
    }
  };

  return (
    <div id={props.id} className="section" onWheel={getMouseDirection}>
      <div className="footer1 bg-secondary">
        <div className="container d-flex justify-content-center align-items-center">
          <p>Ici c'est le footer</p>
        </div>
      </div>
      <footer className="footer2 text-secondary d-flex justify-content-between align-items-center px-5">
        <p>Copyright ©2020 Moi. All Rights Reserved</p>
        <div className="d-flex">
          <a href="https://www.facebook.com/nathan.vandyck">Facebook</a>
          <span className="mx-2">|</span>
          <p>Twitter</p>
          <span className="mx-2">|</span>
          <p>LinkedIn</p>
          <span className="mx-2">|</span>
          <a href="https://github.com/NathanVD">GitHub</a>
        </div>
      </footer>
    </div>
  );
};
