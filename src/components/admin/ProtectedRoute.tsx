// src/components/admin/ProtectedRoute.tsx
import { useAuth } from "../../contexts/AuthContext";
import Login from "./Login";
import AdminPanel from "./AdminPanel";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-eco-50">
        <Loader2 className="w-8 h-8 text-eco-500 animate-spin" />
      </div>
    );
  }

  return session ? <AdminPanel /> : <Login />;
}
