import React from "react"; //, { useState }
import $ from "jquery";
import "../css/Section5.css";

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
    <div id={props.id} className="section sec5" onWheel={getMouseDirection}>
      <div className="container d-flex justify-content-center align-items-center">
        <form className="w-75">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
