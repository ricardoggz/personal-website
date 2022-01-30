import React from "react";
import { NavWrapper, NavTitles, NavList } from "./nav.elements";

export const NavBar = () => {
  return (
    <NavWrapper>
      <NavTitles className="flex-container">
        <span className="logo">RICARDODEV</span>
        <NavList>
          <ul>
            <li>< a href="#">Inicio</a></li>
            <li>< a href="#">Sobre mí</a></li>
            <li>< a href="#">Proyectos</a></li>
            <li>< a href="#">Contacto</a></li>
          </ul>
        </NavList>
      </NavTitles>
    </NavWrapper>
  );
};
