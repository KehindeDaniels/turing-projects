import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, AuthContext } from "./authContext";
import { useContext } from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav className="p-4 bg-gray-200">
            <Link to="/" className="mx-2">
              Home
            </Link>
            <Link to="/dashboard" className="mx-2">
              Dashboard
            </Link>
            <Link to="/login" className="mx-2">
              Login
            </Link>
            <Link to="/signup" className="mx-2">
              SignUp
            </Link>
            <AuthStatus />
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

const AuthStatus = () => {
  const { user, logout } = useContext(AuthContext);

  if (user) {
    return (
      <div className="inline-block mx-2">
        <span className="mr-2">Logged in as {user.username}</span>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    );
  } else {
    return <span className="mx-2">Not logged in</span>;
  }
};

export default App;
