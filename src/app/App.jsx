import React from "react";
import NavBar from "../components/Nav/NavBar";
import Hero from "../components/hero/Hero";
import GlobalStyle from "../index.elements";
import About from "../components/about/About";

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <About />
    </React.Fragment>
  );
};
