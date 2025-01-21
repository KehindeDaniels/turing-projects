// src/Router.js

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isLoggedIn, isAuthorized } from "./Auth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  if (!isLoggedIn()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!isAuthorized(location.pathname)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;
