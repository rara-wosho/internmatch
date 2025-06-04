import { useRef, useState } from "react";

import { IoLink } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { useAuth } from "../context/AuthContext";

function InviteLinkSection({ group_id }) {
    const [copied, setCopied] = useState(false);
    const { user } = useAuth();
    const linkInputRef = useRef(null);

    const handleCopy = async (value) => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="clr-white p-3 rounded mb-2 shadow-sm">
            <div className="d-flex align-items-center mb-2">
                <p className="mb-0 txt-muted fw-semibold">Invitation link</p>

                <div className="rounded-pill txt-accent-dark clr-accent-2 fs-8 d-inline-block ms-auto px-2">
                    Active
                </div>
            </div>

            <i className="fs-8 txt-secondary mb-1 d-block">
                Invite students to create an acount for this group.
            </i>
            <div className="d-flex align-items-center clr-lightgray rounded-1 p-1 mb-3 w-100">
                <input
                    type="text"
                    readOnly
                    value={`localhost:5173/student-registration/${group_id}`}
                    className="fs-7 bg-transparent border-0 outline-0 w-100"
                    ref={linkInputRef}
                />
            </div>

            <button className="btn btn-danger btn-sm">
                <IoLink size={18} className="me-1" /> Deactivate link
            </button>
            <button
                disabled={copied}
                onClick={() => handleCopy(linkInputRef.current.value)}
                className="btn btn-outline-secondary ms-2 btn-sm"
            >
                <MdContentCopy className="me-1" />
                {copied ? "Copied" : "Copy"}
            </button>
        </div>
    );
}

export default InviteLinkSection;
