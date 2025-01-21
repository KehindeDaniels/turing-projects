// src/routes.js
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Login from "./components/Login";
import ManagerDashboard from "./components/ManagerDashboard";
import { getToken } from "./utils/auth";

const PrivateRoute = ({ children }) => {
  const token = getToken();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin-dashboard"
        element={
          <PrivateRoute>
            {getToken().role === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" replace />
            )}
          </PrivateRoute>
        }
      />
      <Route
        path="/manager-dashboard"
        element={
          <PrivateRoute>
            {["admin", "manager"].includes(getToken().role) ? (
              <ManagerDashboard />
            ) : (
              <Navigate to="/login" replace />
            )}
          </PrivateRoute>
        }
      />
      <Route
        path="/employee-dashboard"
        element={
          <PrivateRoute>
            {["admin", "manager", "employee"].includes(getToken().role) ? (
              <EmployeeDashboard />
            ) : (
              <Navigate to="/login" replace />
            )}
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
