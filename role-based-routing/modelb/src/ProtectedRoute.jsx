// src/ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Auth from "./auth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  if (!Auth.isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
