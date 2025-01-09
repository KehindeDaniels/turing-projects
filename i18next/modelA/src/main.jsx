import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import { StoreProvider } from "./store";
import ErrorBoundary from "./ErrorBoundary";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
