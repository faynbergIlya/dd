import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./App.styles.js";
import { Main } from "./Main.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>
);
