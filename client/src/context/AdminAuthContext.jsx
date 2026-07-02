import { createContext, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio_admin_token";
const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY));

  const value = useMemo(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      login: (newToken) => {
        localStorage.setItem(STORAGE_KEY, newToken);
        setToken(newToken);
      },
      logout: () => {
        localStorage.removeItem(STORAGE_KEY);
        setToken(null);
      },
    }),
    [token]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}
