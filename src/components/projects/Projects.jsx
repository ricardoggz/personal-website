import React from "react";

import storeApp from "../../img/store-app.png";
import landing from "../../img/landing.png"
import { WrapperProject, GridCards, Card } from "./elements";

const Projects = () => {
  return (
    <WrapperProject>
      <div className="flex-container">
        <h2>Proyectos recientes</h2>
        <GridCards>
          <Card>
            <a href="https://playitafilms-demo.netlify.app/" target="_blank">
              <img src={ landing } alt="LANDING" loading="lazy"/>
            </a>
          </Card>
        </GridCards>
      </div>
    </WrapperProject>
  );
};

export default Projects;
