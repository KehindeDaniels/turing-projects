import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signUp = (username, password) => {
    if (users.find((u) => u.username === username)) {
      return { success: false, message: "Username already taken" };
    }
    const newUser = { username, password };
    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    return { success: true, message: "Sign up successful" };
  };

  const login = (username, password) => {
    const existingUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!existingUser) {
      return { success: false, message: "Invalid username or password" };
    }
    setUser(existingUser);
    localStorage.setItem("user", JSON.stringify(existingUser));
    return { success: true, message: "Login successful" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
