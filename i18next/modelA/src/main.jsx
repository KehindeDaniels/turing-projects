// index.js
import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes";
import { StoreProvider } from "./store";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
