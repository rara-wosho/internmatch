import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import { useState } from "react";

import MainContentHeader from "../../components/MainContentHeader";

const AdminLayout = () => {
    const [expand, setExpand] = useState(true);
    return (
        <div className={`admin-layout clr-body ${expand && "expand"}`}>
            <AdminSidebar expand={expand} setExpand={setExpand} />

            <main className="main-content min-h-100 w-100">
                <MainContentHeader setExpand={setExpand} expand={expand} />
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
