import React from "react";
import logo from "../../img/logo.png";
import { HeroWrapper, HeroImage, HeroDescription, HeroTitles } from "./elements";
const Hero = () => {
  return (
    <HeroWrapper>
      <HeroDescription className="flex-container">
      <HeroImage src={ logo } alt="RICARDODEV" />
        <HeroTitles>
        <span>
          Ricardo Guevara
        </span>
        <p>
          Desarrollador Web
        </p>
        </HeroTitles>
      </HeroDescription>
    </HeroWrapper>
  );
};

export default Hero;
