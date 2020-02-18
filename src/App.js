import React from "react";
import "./css/App.min.css";
import { Nav, Header, Section1, Section2, Section3 } from "./components";

function App() {
  return (
    <div className="App">
      <span name="top" />
      <header>
        <Nav />
        <Header id="header" />
        <Section1 id="section1" />
        <Section2 id="section2" />
        <Section3 id="section3" />
        <footer id="footer">Copyright ©2020 Moi. All Rights Reserved</footer>
      </header>
    </div>
  );
}

export default App;
