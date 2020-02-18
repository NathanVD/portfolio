import React from "react";
import "./css/App.min.css";
import { Nav, Header, Section1, Section2 } from "./components";

function App() {
  return (
    <div className="App">
      <span name="top" />
      <header>
        <Nav />
        <Header id="header" />
        <Section1 id="section1" />
        <Section2 id="section2" />
        <section id="section3"></section>
        <footer id="footer">Copyright ©2020 Moi. All Rights Reserved</footer>
      </header>
    </div>
  );
}

export default App;
