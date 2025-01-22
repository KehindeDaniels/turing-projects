// src/Auth.js

const USER_KEY = "user";

const roles = {
  admin: "admin",
  manager: "manager",
  employee: "employee",
};

const routes = {
  admin: ["/admin", "/manager", "/employee"],
  manager: ["/manager", "/employee"],
  employee: ["/employee"],
};

const setUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem(USER_KEY));
};

const getToken = () => {
  const user = getUser();
  return user?.token;
};

const getRole = () => {
  const user = getUser();
  return user?.role;
};

const isLoggedIn = () => {
  return getToken() !== undefined;
};

const isAuthorized = (path) => {
  const role = getRole();
  return routes[role].includes(path);
};

const login = (username, password) => {
  // Mock login logic
  if (username === "admin" && password === "admin") {
    setUser({ token: "admin-token", role: roles.admin });
  } else if (username === "manager" && password === "manager") {
    setUser({ token: "manager-token", role: roles.manager });
  } else if (username === "employee" && password === "employee") {
    setUser({ token: "employee-token", role: roles.employee });
  } else {
    throw new Error("Invalid username or password");
  }
};

const logout = () => {
  localStorage.removeItem(USER_KEY);
};

export { isLoggedIn, isAuthorized, login, logout, getRole };
