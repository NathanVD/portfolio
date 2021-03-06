import React, { useState, useEffect } from "react"; //, { useState }
import $ from "jquery";
import { InView } from "react-intersection-observer";
import "../css/Section2.css";
import CountUp from "react-countup";

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
  -  Compteur de secondes & start CountUp
  - 
  */
  const [date, setDate] = useState(new Date());
  const start = new Date(2019, 11, 28, 16, 14);
  let hoursOfCode = Math.floor((date.getTime() - start.getTime()) / 3600000);
  useEffect(() => {
    let interval = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  /*
  -
  -  Compteur de secondes & start CountUp
  - 
  */

  return (
    <InView>
      {({ inView, ref }) => (
        <div
          id={props.id}
          className="section sec2  d-flex justify-content-center align-items-center"
          onWheel={getMouseDirection}
        >
          <div ref={ref} className="container text-white">
            <div className="row w-100">
              <div className="col mt-5">
                <div className="d-flex flex-column align-items-center">
                  <i className="ico fas fa-project-diagram fa-5x"></i>
                  <div className="big text-info my-3">
                    <CountUp end={inView ? 20 : 0} duration={2} />
                  </div>
                  <p className="upper">projects</p>
                </div>
              </div>
              <div className="col mt-5">
                <div className="d-flex flex-column align-items-center">
                  <i className="ico fas fa-book fa-5x"></i>
                  <div className="big text-info my-3">
                    <CountUp end={inView ? 7 : 0} duration={2} />
                  </div>
                  <p className="upper">repositories</p>
                </div>
              </div>
              <div className="col mt-5">
                <div className="d-flex flex-column align-items-center">
                  <i className="ico fas fa-laptop-code fa-5x"></i>
                  <div className="big text-info my-3">
                    <CountUp end={inView ? 158891 : 0} duration={1} />
                  </div>
                  <p className="upper">Lines coded</p>
                </div>
              </div>
              <div className="col mt-5">
                <div className="d-flex flex-column align-items-center">
                  <i className="ico fas fa-history fa-5x"></i>
                  <p className="big text-info my-3">{hoursOfCode}</p>
                  <p className="upper">hours of code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
};
