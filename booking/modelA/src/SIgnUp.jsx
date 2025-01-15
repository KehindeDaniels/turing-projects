// SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = signUp(username, password);
    if (result.success) {
      navigate("/login");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="block w-full p-2 mt-2 border rounded"
          />
        </div>
        <div className="mt-4">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="block w-full p-2 mt-2 border rounded"
          />
        </div>
        {error && <div className="mt-4 text-red-500">{error}</div>}
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
