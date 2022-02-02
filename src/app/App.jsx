import React from "react";
import { NavBar } from "../components/navBar/NavBar";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";

export const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </React.Fragment>
  );
};
