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
    <div id={props.id} onWheel={getMouseDirection}>
      <div className="footer1 text-secondary">
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-info text-center pt-2">Je sais pas : </h5>
              <p>
                Ici c'est le footer. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusamus quaerat nihil odio veritatis
                assumenda.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-info text-center pt-2">Links :</h5>
              <div className="row">
                <div className="link col-6 text-right p-0 pr-1">
                  <a href="https://www.facebook.com/nathan.vandyck">Facebook</a>
                  <i className="fab fa-facebook-square fa-2x ml-2"></i>
                </div>
                <div className="link col-6 p-0">
                  <i className="fab fa-twitter-square fa-2x mr-2"></i>
                  <a href="https://twitter.com">Twitter</a>
                </div>
                <div className="link col-6 text-right p-0 pr-1">
                  <a href="https://linkedin.com">LinkedIn</a>
                  <i className="fab fa-linkedin fa-2x ml-2"></i>
                </div>
                <div className="link col-6 p-0">
                  <i className="fab fa-github-square fa-2x mr-2"></i>
                  <a href="https://github.com/NathanVD">GitHub</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="text-info text-center pt-2">Crédits : </h5>
              <ul>
                <li>
                  <a href="https://www.svgrepo.com/svg/59185/hexagon">Logo</a>
                </li>
                <li>
                  <a href="https://wallpaperaccess.com/hexagon">Background</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer2 bg-secondary d-flex flex-wrap justify-content-center align-items-center px-5">
        <p>Copyright ©2020 Moi. All Rights Reserved</p>
      </footer>
    </div>
  );
};
