import React from "react";
import CV from "../assets/CV_Nathan_VanDyck.pdf";
import "../css/Section1.css";
import Skills from "./Skills";

export default props => {
  return (
    <div id={props.id} className="sec1 py-5">
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h3 className="ml-3 d-inline-block">About Me</h3>
            <a
              href={CV}
              className="badge badge-pill badge-outlined-info text-info align-top ml-2"
            >
              Get my CV
            </a>
            <p className="border bg-white p-3">
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
          <div className="col">
            <h3 className="ml-3">My Skills</h3>
            <Skills />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3 className="mt-3">My Links</h3>
          <div className="d-flex justify-content-around w-100">
            <a
              href="https://www.facebook.com/nathan.vandyck"
              className="text-info d-flex align-items-center"
            >
              <i className="fab fa-facebook-square fa-3x"></i>
              <span className="h4 pl-2 m-0">Facebook</span>
            </a>
            <p className="nav-link text-info d-flex align-items-center">
              <i className="fab fa-twitter-square fa-3x"></i>
              <span className="h4 pl-2 m-0">Twitter</span>
            </p>
            <p className="nav-link text-info d-flex align-items-center">
              <i className="fab fa-linkedin fa-3x"></i>
              <span className="h4 pl-2 m-0">LinkedIn</span>
            </p>
            <a
              href="https://github.com/NathanVD"
              className="text-info d-flex align-items-center"
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
