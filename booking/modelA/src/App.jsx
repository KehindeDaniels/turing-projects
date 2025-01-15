import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";

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
            <AuthContext.Consumer>
              {({ user, logout }) =>
                user && (
                  <button
                    className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={logout}
                  >
                    Logout
                  </button>
                )
              }
            </AuthContext.Consumer>
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

export default App;
