import React, { lazy, Suspense } from "react";
import Loader from "../components/loader/Loader";

const Hero = lazy(() => import("../components/hero/Hero"));
const About = lazy(() => import("../components/about/About"));
const NavBar = lazy(() => import("../components/Nav/NavBar"));
const Footer = lazy(() => import("../components/footer/Footer"));
const Projects = lazy(() => import("../components/projects/Projects"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </Suspense>
  );
};

export default Home;
