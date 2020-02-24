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
    <div
      id={props.id}
      className="d-flex align-items-center"
      onWheel={getMouseDirection}
    >
      <div className="container pt-5 pt-lg-0">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <h2 className="text-dark mb-2 mb-lg-5">Contact me</h2>
            <ul className="contacts">
              <li className="my-3">
                <div className="ico-square bg-info text-white text-center mx-3">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <b>GSM : </b>+32 475 92 59 04
              </li>
              <li className="my-3">
                <div className="ico-square bg-info text-white text-center mx-3">
                  <i className="fas fa-at"></i>
                </div>
                <b>E-mail : </b>n.vandyck@dn-solution.com
              </li>
              <li className="my-3">
                <div className="ico-square bg-info text-white text-center mx-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <b>Adress : </b>rue de la mutualité, 59 <br />
                <span className="tab">1180 Brussels - Belgium</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <h2 className="text-dark mb-4">... Or leave a message</h2>
            <form>
              <div className="form-row">
                <div className="col mb-2">
                  <label htmlFor="inputSurname">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSurname"
                    required
                  />
                  <div className="valid-feedback">OK !</div>
                </div>
                <div className="col mb-2">
                  <label htmlFor="inputName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    required
                  />
                  <div className="valid-feedback">OK !</div>
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="inputSubject">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSubject"
                    required
                  />
                  <div className="valid-feedback">OK !</div>
                </div>
                <div className="col">
                  <label htmlFor="inputEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Your infos won't be shared with anyone.
                  </small>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputMessage">Message</label>
                <textarea
                  className="form-control text"
                  id="inputMessage"
                  required
                />
              </div>
              <button type="submit" className="btn btn-info">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
