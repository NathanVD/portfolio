import React from "react";
import $ from "jquery";
import CV from "../assets/CV_Nathan_VanDyck.pdf";
import "../css/Section1.css";
import Skills from "./Skills";

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
        scroll("header");
      } else if (e.deltaY > 0) {
        scroll("section2");
      }
    }
  };

  return (
    <div
      id={props.id}
      className="sec1 d-flex align-items-center"
      onWheel={getMouseDirection}
    >
      <div className="container my-5 my-md-0">
        <div className="row mt-5 mt-md-0">
          <div className="col-12 col-md-6">
            <h3 className="ml-3 d-inline-block">About Me</h3>
            <a
              href={CV}
              className="badge badge-pill badge-outlined-info text-info align-top ml-2"
            >
              Get my CV
            </a>
            <p className="about-box border overflow-auto p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              harum commodi quis reiciendis exercitationem aspernatur magni?
              Illum rem veritatis, dicta possimus voluptate laborum unde
              adipisci perspiciatis delectus ut, minus autem? Nam, expedita vero
              quisquam similique recusandae illum maxime quia veritatis tempore
              repellat provident quos corrupti modi laudantium, maiores,
              consequuntur fugit dolores! Ex velit unde corrupti numquam maxime,
              veniam magni porro! Iste delectus laboriosam adipisci autem
              repellendus ea sed, sint alias asperiores quisquam ad porro fugit,
              beatae dolore culpa, enim inventore magni ipsam veniam dolor. Vero
              explicabo assumenda doloribus officiis voluptate.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="ml-3 mt-4 mt-md-0">My Skills</h3>
            <Skills />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3 className="mt-5">My Links</h3>
          <div className="row w-100">
            <a
              href="https://www.facebook.com/nathan.vandyck"
              className="col-6 col-md-3 text-info d-flex align-items-center"
            >
              <i className="fab fa-facebook-square fa-3x"></i>
              <span className="h4 pl-2 m-0">Facebook</span>
            </a>
            <a
              href="https://www.twitter.com"
              className="col-6 col-md-3 text-info d-flex align-items-center"
            >
              <i className="fab fa-twitter-square fa-3x"></i>
              <span className="h4 pl-2 m-0">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com"
              className="col-6 col-md-3 text-info d-flex align-items-center"
            >
              <i className="fab fa-linkedin fa-3x"></i>
              <span className="h4 pl-2 m-0">LinkedIn</span>
            </a>
            <a
              href="https://github.com/NathanVD"
              className="col-6 col-md-3 text-info d-flex align-items-center"
            >
              <i className="fab fa-github-square fa-3x"></i>
              <span className="h4 pl-2 m-0">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
