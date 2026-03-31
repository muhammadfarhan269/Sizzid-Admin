import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi, logoutApi, meApi, registerApi } from "../api/auth";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("sizzld_token"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("sizzld_token");
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const me = await meApi();
        setUser(me);
      } catch {
        localStorage.removeItem("sizzld_token");
        setAccessToken(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, []);

  const login = useCallback(async (email, password) => {
    const result = await loginApi({ email, password });
    localStorage.setItem("sizzld_token", result.accessToken);
    setAccessToken(result.accessToken);
    setUser(result.user);
    return result.user;
  }, []);

  const register = useCallback(async (email, username, password) => {
    const result = await registerApi({ email, username, password });
    localStorage.setItem("sizzld_token", result.accessToken);
    setAccessToken(result.accessToken);
    setUser(result.user);
    return result.user;
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutApi();
    } catch {
      // noop
    }
    localStorage.removeItem("sizzld_token");
    setAccessToken(null);
    setUser(null);
    navigate("/");
  }, [navigate]);

  const value = useMemo(
    () => ({
      user,
      accessToken,
      isLoading,
      isAuthenticated: !!user,
      login,
      register,
      logout,
      setUser,
    }),
    [accessToken, isLoading, login, logout, register, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
