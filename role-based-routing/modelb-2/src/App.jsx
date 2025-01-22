// src/App.jsx

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./Router";
import Navbar from "./Navbar";
import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import EmployeeDashboard from "./EmployeeDashboard";
import Login from "./Login";
import Unauthorized from "./Unauthorized";
import { isLoggedIn, getRole, logout } from "./Auth";

const App = () => {
  const [role, setRole] = useState(getRole());
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  useEffect(() => {
    const handleLoginStatusChange = () => {
      setRole(getRole());
      setLoggedIn(isLoggedIn());
    };

    window.addEventListener("loginStatusChange", handleLoginStatusChange);

    return () => {
      window.removeEventListener("loginStatusChange", handleLoginStatusChange);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setRole(null);
    setLoggedIn(false);
    window.dispatchEvent(new Event("loginStatusChange"));
  };

  return (
    <BrowserRouter>
      <Navbar role={role} loggedIn={loggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/manager"
          element={
            <PrivateRoute>
              <ManagerDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <PrivateRoute>
              <EmployeeDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <Login
              onLogin={() =>
                window.dispatchEvent(new Event("loginStatusChange"))
              }
            />
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
