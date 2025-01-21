// src/auth.js
class Auth {
  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return token !== null;
  }

  static getRole() {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      return decodedToken.role;
    }
    return null;
  }

  static login(token) {
    localStorage.setItem("token", token);
  }

  static logout() {
    localStorage.removeItem("token");
  }
}

export default Auth;
