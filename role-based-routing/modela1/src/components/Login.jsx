// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../utils/auth";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    authenticate(role);
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="employee">Employee</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
