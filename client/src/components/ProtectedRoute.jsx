import { useAdminAuth } from "../context/AdminAuthContext";
import AdminLogin from "../pages/AdminLogin";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAdminAuth();
  return isAuthenticated ? children : <AdminLogin />;
}
