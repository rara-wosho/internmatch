import { FiSidebar } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

function MainContentHeader({ setExpand, expand }) {
    const { user } = useAuth();

    return (
        <div className="main-content-header d-flex align-items-center justify-content-between p-3 clr-white shadow-sm">
            <div className="d-flex align-items-center">
                <div
                    className="me-2 hover-primary px-2 py-1 hover-txt-primary rounded smooth pointer"
                    onClick={() => setExpand(!expand)}
                >
                    <FiSidebar size={18} />
                </div>
                <h5 className="mb-0 fs-7 fw-semibold">Dashboard</h5>
            </div>

            <div className="d-flex align-items-center">
                <div className="hover-txt-primary px-2 smooth rounded pointer">
                    <IoSettingsOutline size={18} />
                </div>
                <div className="hover-txt-primary px-2 smooth rounded pointer">
                    <FaRegBell size={18} />
                </div>
                <div className="px-2 rounded pointer d-flex align-items-center fw-semibold">
                    <img
                        className="rounded-circle"
                        src="https://i.pinimg.com/736x/87/5b/4f/875b4fb82c44a038466807b0dcf884cc.jpg"
                        width="30"
                        alt=""
                    />

                    <p className="mb-0 txt-muted ms-2 d-none d-md-inline-block">
                        {user.email}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainContentHeader;
