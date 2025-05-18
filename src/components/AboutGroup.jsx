import { MdModeEditOutline } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { BsCalendar2Date } from "react-icons/bs";

function AboutGroup() {
    return (
        <div className="clr-white p-3 rounded mb-2">
            <div className="d-flex align-items-center mb-2">
                <p className="mb-0 txt-muted fw-semibold">Batch 2024 - 2025</p>
                <div className="pointer ms-auto px-2 hover-txt-primary smooth">
                    <MdModeEditOutline size={18} />
                </div>
            </div>
            <i className="txt-secondary fs-7 w-100 d-block mb-3">
                No description provided.
            </i>

            <div className="d-flex align-items-center mb-1">
                <LuUsers size={16} />
                <p className="mb-0 ms-2 fs-7 txt-secondary">33 Members</p>
            </div>
            <div className="d-flex align-items-center mb-1">
                <BsCalendar2Date size={15} />
                <p className="mb-0 ms-2 fs-7 txt-secondary">August 20 2025</p>
            </div>
        </div>
    );
}

export default AboutGroup;
