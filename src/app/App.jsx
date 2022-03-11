import React from "react";
import Hero from "../components/hero/Hero";
import GlobalStyle from "../index.elements";
import About from "../components/about/About";
import NavBar from "../components/Nav/NavBar";
import Projects from "../components/projects/Projects";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </React.Fragment>
  );
};

export default App;
