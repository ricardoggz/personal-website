import React, { lazy, Suspense } from "react";
import Loader from "../components/loader/Loader";

const Hero = lazy(() => import("../components/hero/Hero"));
const About = lazy(() => import("../components/about/About"));
const NavBar = lazy(() => import("../components/Nav/NavBar"));
const Projects = lazy(() => import("../components/projects/Projects"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <NavBar />
      <Hero />
      <Projects />
      <About />
    </Suspense>
  );
};

export default App;
