import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between">
        {token && role === "admin" && (
          <>
            <li className="mr-4">
              <NavLink to="/admin" className="text-white hover:text-gray-300">
                Admin Dashboard
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/manager" className="text-white hover:text-gray-300">
                Manager Dashboard
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink
                to="/employee"
                className="text-white hover:text-gray-300"
              >
                Employee Dashboard
              </NavLink>
            </li>
          </>
        )}
        {token && role === "manager" && (
          <>
            <li className="mr-4">
              <NavLink to="/manager" className="text-white hover:text-gray-300">
                Manager Dashboard
              </NavLink>
            </li>
          </>
        )}
        {token && role === "employee" && (
          <>
            <li className="mr-4">
              <NavLink
                to="/employee"
                className="text-white hover:text-gray-300"
              >
                Employee Dashboard
              </NavLink>
            </li>
          </>
        )}
        {token && (
          <li>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
