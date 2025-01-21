// src/RoleBasedProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Auth from "./auth";

const RoleBasedProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();
  if (!Auth.isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  const userRole = Auth.getRole();
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
};

export default RoleBasedProtectedRoute;
