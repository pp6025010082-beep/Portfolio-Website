import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <AdminAuthProvider>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AdminAuthProvider>
  );
}
