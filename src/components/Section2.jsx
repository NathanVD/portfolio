import React, { useState, useEffect } from "react"; //, { useState }
import "../css/Section2.css";

export default props => {
  const [date, setDate] = useState(new Date());
  const start = new Date(2019, 11, 28, 16, 14);
  let hoursOfCode = Math.floor((date.getTime() - start.getTime()) / 1000);
  useEffect(() => {
    let interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <div id={props.id} className="sec2 p-5">
      <div className="container text-white d-flex justify-content-between my-5 py-5">
        <div className="d-flex flex-column align-items-center">
          <i className="fas fa-project-diagram fa-5x"></i>
          <p className="big text-info my-3">20</p>
          <p className="upper">projects</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="fas fa-book fa-5x"></i>
          <p className="big text-info my-3">7</p>
          <p className="upper">repositories</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="fas fa-laptop-code fa-5x"></i>
          <p className="big text-info my-3">157560</p>
          <p className="upper">Lines of code</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <i className="fas fa-history fa-5x"></i>
          <p className="big text-info my-3">{hoursOfCode}</p>
          <p className="upper">seconds of code</p>
        </div>
      </div>
    </div>
  );
};
