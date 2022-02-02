import React from "react";
import { NavBar } from "../components/navBar/NavBar";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";

export const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <About />
    </React.Fragment>
  );
};
