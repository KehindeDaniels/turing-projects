// src/Navbar.js

import React from "react";
import { NavLink } from "react-router-dom";
import { getRole, logout } from "./Auth";

const Navbar = () => {
  const role = getRole();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between">
        {role === "admin" && (
          <>
            <li className="mr-4">
              <NavLink to="/admin">Admin Dashboard</NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/manager">Manager Dashboard</NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/employee">Employee Dashboard</NavLink>
            </li>
          </>
        )}
        {role === "manager" && (
          <>
            <li className="mr-4">
              <NavLink to="/manager">Manager Dashboard</NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/employee">Employee Dashboard</NavLink>
            </li>
          </>
        )}
        {role === "employee" && (
          <li className="mr-4">
            <NavLink to="/employee">Employee Dashboard</NavLink>
          </li>
        )}
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
