import React from "react";
import { NavWrapper, NavTitles, NavList } from "./nav.elements";
import { FaBars } from "react-icons/fa";

export const NavBar = () => {
  return (
    <NavWrapper>
      <NavTitles className="flex-container">
        <span className="logo">RICARDODEV</span>
        <NavList>
          <input type="checkbox" id="btn-menu" />
          <label htmlFor="btn-menu">
            <FaBars />
          </label>
          <ul>
            <li>< a href={"#"}>Inicio</a></li>
            <li>< a href={"#"}>Sobre mí</a></li>
            <li>< a href={"#"}>Proyectos</a></li>
            <li>< a href={"#"}>Contacto</a></li>
          </ul>
        </NavList>
      </NavTitles>
    </NavWrapper>
  );
};
