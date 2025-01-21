// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAdmin, isManager, isEmployee, removeToken } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <nav>
      {isAdmin() && (
        <>
          <Link to="/admin-dashboard">Admin Dashboard</Link>
          <Link to="/manager-dashboard">Manager Dashboard</Link>
          <Link to="/employee-dashboard">Employee Dashboard</Link>
        </>
      )}
      {isManager() && (
        <>
          <Link to="/manager-dashboard">Manager Dashboard</Link>
          <Link to="/employee-dashboard">Employee Dashboard</Link>
        </>
      )}
      {isEmployee() && (
        <>
          <Link to="/employee-dashboard">Employee Dashboard</Link>
        </>
      )}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
