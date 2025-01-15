import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
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
            <AuthLinks />
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

const AuthLinks = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <a href="/" className="mx-2">
        Home
      </a>
      {user ? (
        <>
          <a href="/dashboard" className="mx-2">
            Dashboard
          </a>
          <button onClick={logout} className="mx-2">
            Logout
          </button>
        </>
      ) : (
        <>
          <a href="/login" className="mx-2">
            Login
          </a>
          <a href="/signup" className="mx-2">
            SignUp
          </a>
        </>
      )}
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default App;
