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

  /*
  -
  - Animation texte
  -
  */

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 100) || 4000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 1000;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };

  return (
    <div id={props.id} className="section sec4 p-5" onWheel={getMouseDirection}>
      <div className="d-flex align-items-center h-100">
        <div className="container text-center">
          <h1 className="text-info">
            <strong>
              <span
                className="txt-rotate"
                data-period="2000"
                data-rotate='[ "Front end developement", "Back end developement", "Responsive websites"]'
              ></span>
              <span className="cursor ml-2">|</span>
            </strong>
          </h1>
        </div>
      </div>
    </div>
  );
};
