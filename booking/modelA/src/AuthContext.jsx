import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signUp = (username, password) => {
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return { success: false, message: "Username already taken" };
    }

    const newUser = { username, password };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    return { success: true, message: "User created successfully" };
  };

  const login = (username, password) => {
    const existingUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!existingUser) {
      return { success: false, message: "Invalid username or password" };
    }

    setUser(existingUser);
    localStorage.setItem("currentUser", JSON.stringify(existingUser));
    return { success: true, message: "Logged in successfully" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
