import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getMyDataService } from "../services/userService";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyDataService(token);
        setCurrentUser(data);
      } catch (error) {
        setToken("");
        setCurrentUser(null);
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
    setCurrentUser(null);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ token, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
