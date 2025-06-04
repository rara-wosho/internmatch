import { NavLink } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { FiSidebar } from "react-icons/fi";
import { supabase } from "../supabase-client";

const navLinks = [
    { icon: <RxDashboard />, path: "/admin/dashboard", label: "Dashboard" },
    { icon: <HiOutlineUserGroup />, path: "/admin/groups", label: "Groups" },
    {
        icon: <IoSettingsOutline />,
        path: "/admin/settings",
        label: "Settings",
    },
];

const AdminSidebar = ({ expand, setExpand }) => {
    async function signOutUser() {
        const { error } = await supabase.auth.signOut("local");

        if (error) {
            console.log("error while signin out user", error);
        }
    }

    const baseClass =
        "d-flex align-items-center w-100 text-decoration-none py-2 smooth navlink";

    return (
        <aside
            className={`admin-sidebar ${
                expand && "expand"
            } d-flex flex-column smooth`}
        >
            {expand && (
                <div
                    onClick={() => setExpand(!expand)}
                    className="sidebar-backdrop d-block d-lg-none"
                ></div>
            )}
            <nav className="min-h-100 clr-white border-end overflow-hidden">
                <ul className="p-0 m-0 list-unstyled">
                    {/* header logo  */}
                    <li className="d-flex align-items-center mb-3 pe-3">
                        <div className="sidebar-icon py-4 center">
                            <FiSidebar size={18} />
                        </div>
                        {expand && (
                            <>
                                <div className="sidebar-label fw-semibold fs-5">
                                    Intern
                                    <span className="txt-primary">Match</span>
                                </div>

                                <div
                                    onClick={() => setExpand(!expand)}
                                    className="pointer hover-primary smooth ms-auto d-inline-block d-lg-none"
                                >
                                    <FiSidebar size={18} />
                                </div>
                            </>
                        )}
                    </li>

                    {navLinks.map(({ path, label, icon }) => (
                        <li key={path} className="d-flex align-items-center">
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `${baseClass} ${
                                        isActive
                                            ? "position-relative active txt-primary clr-body"
                                            : " txt-muted"
                                    }`
                                }
                            >
                                <div className="sidebar-icon py-2 center">
                                    {icon}
                                </div>
                                {expand && (
                                    <p className="mb-0 fs-7 sidebar-label">
                                        {label}
                                    </p>
                                )}
                            </NavLink>
                        </li>
                    ))}

                    <li>
                        <button onClick={signOutUser}>logout</button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
