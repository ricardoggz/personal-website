import React from "react";
import { WrapperProject, GridCards, Card } from "./elements";
import AnchorButton from "../anchorButton/AnchorButton";
import storeApp from "../../img/store-app.png"

const Projects = () => {
  return (
      <WrapperProject>
          <div className="flex-container">
              <h2>Proyectos recientes</h2>
              <GridCards>
               <Card>
                   < a href=""><figure>
                       <img src={ storeApp } alt="STORE APP" />
                   </figure>
                   </a>
               </Card>
               <Card>
                   <figure>
                       <img src={ storeApp } alt="STORE APP" />
                   </figure>
               </Card>
              </GridCards>
          </div>
          
      </WrapperProject>
  );
};

export default Projects;
