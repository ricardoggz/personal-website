import React from "react";
import landing from "../../img/landing.png";
import { BsLink45Deg } from "react-icons/bs";
import { WrapperProject, GridCards, Card } from "./elements";

const Projects = () => {
  return (
    <WrapperProject id="portfolio">
      <div className="flex-container">
        <h2>Portafolio</h2>
        <GridCards>
          <Card>
            <a href="https://playitafilms-demo.netlify.app/" target={"_blank"} rel="noreferrer">
              <figure>
                <img src={landing} alt="Playita Films" loading="lazy" />
              </figure>
              <div>
                <span>
                  <BsLink45Deg /> Sitio web para playita films
                </span>
                <p>
                  Desarrollé un sitio para mostrar los servicios y el equipo en renta de una productora audiovisual.
                </p>
              </div>
            </a>
          </Card>
        </GridCards>
      </div>
    </WrapperProject>
  );
};

export default Projects;
