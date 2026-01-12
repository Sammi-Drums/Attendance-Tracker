import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowedRoles }) {
    const { user } = useAuth();

    // Not logged in → go to role selection
    if (!user) {
        return <Navigate to="/" replace />;
    }

    // Logged in but role not allowed → go to role selection
    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    return children;
}
