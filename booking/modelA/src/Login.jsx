import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);
    if (result.success) {
      const from = location.state?.from;
      navigate(from || "/dashboard", { replace: true });
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block font-bold" htmlFor="username">
            Username
          </label>
          <input
            className="block w-full p-2 border rounded"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="block w-full p-2 border rounded"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Login
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;
