import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getMyDataService } from "../services/userService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyDataService(token);
        setUser(data);
      } catch (error) {
        setToken("");
        setUser(null);
      }
    };
    if (token) getUserData();
  }, [token, setToken]);

  // Login
  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  // LogOut
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
