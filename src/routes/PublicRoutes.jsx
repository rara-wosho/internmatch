import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PublicRoutes() {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/home" replace />;
    }

    return <Outlet />;
}

export default PublicRoutes;
