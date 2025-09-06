// frontend/src/context/AuthContext.js
import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:3002/auth",
    withCredentials: true,
  });

  const fetchUser = useCallback(async () => {
    try {
      const res = await axiosInstance.post("/");
      if (res.data.status) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Verification error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [axiosInstance]);

  const signup = async (email, password, username) => {
    try {
      const res = await axiosInstance.post("/signup", {
        email,
        password,
        username,
        createdAt: new Date(),
      });
      if (res.data.success) {
        setUser(res.data.user);
      }
      return res.data;
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axiosInstance.post("/login", { email, password });
      if (res.data.success) {
        setUser(res.data.user); // Immediately set the user state here
      }
      return res.data;
    } catch (err) {
      console.error("Login error:", err);
      return { success: false, message: "Login failed" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};