import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({id: "guest", name: "Guest"});
  const [isLoading, setIsLoading] = useState(true);

  // (Optional) restore session
  useEffect(() => {
    const raw = localStorage.getItem("demo:user");
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch {}
    }
    setIsLoading(false);
  }, []);

  // Replace these with your real auth calls
  const login = async (credentials) => {
    setIsLoading(true);
    const u = { id: "123", name: credentials?.name ?? "Demo User" };
    setUser(u);
    localStorage.setItem("demo:user", JSON.stringify(u));
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    setUser(null);
    localStorage.removeItem("demo:user");
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}