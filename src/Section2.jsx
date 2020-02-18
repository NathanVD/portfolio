import React, { useState, useEffect } from "react"; //, { useState }
import "./css/Header.css";

export default () => {
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
    <div className="container my-5">
      <div>{hoursOfCode} secondes de code</div>
      <div>20 projets</div>
    </div>
  );
};
