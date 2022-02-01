import React from "react";
import { NavBar } from "../components/navBar/NavBar";
import { Hero } from "../components/hero/Hero";

export const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
    </React.Fragment>
  );
};
