import React from "react";
import "./css/App.min.css";
import {
  Nav,
  Home,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Footer
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
      <Section5 id="section5" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
