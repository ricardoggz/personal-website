import React from "react";
import { WrapperProject, GridCards, Card } from "./elements";
import AnchorButton from "../anchorButton/AnchorButton";
import storeApp from "../../img/store-app.png";

const Projects = () => {
  return (
    <WrapperProject>
      <div className="flex-container">
        <h2>Proyectos recientes</h2>
        <GridCards>
          <Card>
            <a href="https://e-commerce-clothes-app.netlify.app/" target="_blank">
              <img src={storeApp} alt="STORE APP" loading="lazy"/>
            </a>
          </Card>
        </GridCards>
      </div>
    </WrapperProject>
  );
};

export default Projects;
