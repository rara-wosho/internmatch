import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { user } = useAuth();

    // If not authenticated, redirect to login
    if (!user) {
        return <Navigate to="/" replace />;
    }

    // If authenticated, render the child routes
    return <Outlet />;
};

export default ProtectedRoute;
