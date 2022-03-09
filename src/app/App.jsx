import React from "react";
import Hero from "../components/hero/Hero";
import GlobalStyle from "../index.elements";

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      < Hero />
    </React.Fragment>
  );
};
