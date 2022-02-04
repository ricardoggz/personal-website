import React from "react";
import { NavBar } from "../components/navBar/NavBar";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";
import { Footer } from "../components/footer/Footer";

export const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};
