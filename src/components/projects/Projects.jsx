import React from "react";
import logoPF from "../../img/logo-pf.jpg";
import AnchorButton from "../anchorButton/AnchorButton";
import { WrapperProject, GridCards, Card } from "./elements";

const Projects = () => {
  return (
    <WrapperProject>
      <div className="flex-container">
        <h2>Proyectos recientes</h2>
        <GridCards>
          <Card>
            <figure>
              <img src={logoPF} alt="Playita Films" loading="lazy" />
            </figure>
            <div>
              <span>Sitio web para playita films</span>
              <p>
                Desarrollé un sitio para mostrar los servicios de una productora
                y renta de equipos para producción audiovisual.
              </p>
              <div className="button_container">
                <AnchorButton title="Ver proyecto" />
              </div>
            </div>
          </Card>
        </GridCards>
      </div>
    </WrapperProject>
  );
};

export default Projects;
