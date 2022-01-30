import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/App";
import { GlobalStyle } from "./index.elements";

ReactDOM.render(
  <>
  <GlobalStyle />
  <App />
  </>,
  document.getElementById("root")
);
