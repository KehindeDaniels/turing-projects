import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const SignUp = () => {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = signup(username, password);
    if (result.success) {
      setSuccess(result.message);
      setError(null);
    } else {
      setError(result.message);
      setSuccess(null);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full p-2 border rounded"
          />
        </div>
        <div className="mt-4">
          <label className="block">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Sign Up
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && <p className="mt-4 text-green-500">{success}</p>}
      </form>
    </div>
  );
};

export default SignUp;
