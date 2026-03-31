import { createContext, useEffect, useMemo, useState } from "react";
import * as authApi from "../api/auth";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("sizzld_token");
    if (!token) {
      setIsLoading(false);
      return;
    }
    authApi
      .getMe()
      .then((res) => setUser(res.data.data))
      .catch(() => localStorage.removeItem("sizzld_token"))
      .finally(() => setIsLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login(email, password);
    const { accessToken, user: me } = res.data.data;
    localStorage.setItem("sizzld_token", accessToken);
    setUser(me);
    return me;
  };

  const register = async (email, username, password) => {
    const res = await authApi.register(email, username, password);
    const { accessToken, user: me } = res.data.data;
    localStorage.setItem("sizzld_token", accessToken);
    setUser(me);
    return me;
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch {
      // noop
    }
    localStorage.removeItem("sizzld_token");
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, isAuthenticated: !!user, isLoading, login, register, logout, setUser }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
