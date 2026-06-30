import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth") === "true";
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (isAuth && savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isAuth", "true");
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("isAuth");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
