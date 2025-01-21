// src/utils/auth.js
const authenticate = (role) => {
  const token = { role };
  localStorage.setItem("token", JSON.stringify(token));
};

const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const removeToken = () => {
  localStorage.removeItem("token");
};

const isAdmin = () => {
  const token = getToken();
  return token && token.role === "admin";
};

const isManager = () => {
  const token = getToken();
  return token && token.role === "manager";
};

const isEmployee = () => {
  const token = getToken();
  return token && token.role === "employee";
};

export { authenticate, getToken, removeToken, isAdmin, isManager, isEmployee };
