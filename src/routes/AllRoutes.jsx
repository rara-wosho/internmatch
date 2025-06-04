import { Routes, Route } from "react-router-dom";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WelcomePage from "../pages/auth/WelcomePage";
import StudentRegistration from "../pages/auth/StudentRegistration";
import AdminLayout from "../pages/admin/AdminLayout";
import Groups from "../pages/admin/Groups";
import Group from "../pages/admin/Group";
import ProtectedRoute from "./ProtectedRoutes";
import AdminDashboard from "../pages/admin/AdminDashboard";

function AllRoutes() {
    return (
        <Routes>
            {/* PUBLIC ROUTES  */}
            <Route path="/" element={<WelcomePage />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route
                path="/student-registration/:group_id"
                element={<StudentRegistration />}
            />

            {/* Protected route logic */}
            <Route element={<ProtectedRoute />}>
                {/* ADMIN ROUTES  */}
                <Route element={<AdminLayout />}>
                    <Route
                        path="/admin/dashboard"
                        element={<AdminDashboard />}
                    />
                    <Route path="/admin/groups" element={<Groups />} />
                    <Route
                        path="/admin/groups/:memberCount/:group_id"
                        element={<Group />}
                    />
                </Route>

                {/* COMPANY ROUTES  */}
                <Route>
                    <Route path="/company/dashboard" />
                    <Route path="/company/exams" />
                </Route>
            </Route>
        </Routes>
    );
}

export default AllRoutes;
