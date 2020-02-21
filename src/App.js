import React from "react";
import "./css/App.min.css";
import {
  Nav,
  Home,
  Section1,
  Section2,
  Section3,
  Section4
} from "./components";

function App() {
  return (
    <div className="App">
      <span name="top" />
      <Nav />
      <Home id="header" />
      <Section1 id="section1" />
      <Section2 id="section2" />
      <Section3 id="section3" />
      <Section4 id="section4" />
      <footer id="footer">Copyright ©2020 Moi. All Rights Reserved</footer>
    </div>
  );
}

export default App;
