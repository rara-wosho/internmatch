import React from "react";

function GroupSettings() {
    return (
        <div className="clr-white p-3 rounded shadow-sm">
            <p className="mb-2 txt-muted fw-semibold">Settings</p>
            <div className="form-check form-switch py-1">
                <label
                    className="form-check-label txt-muted pointer"
                    htmlFor="allowexam"
                >
                    Allowed for examination
                </label>
                <input
                    className="form-check-input pointer"
                    type="checkbox"
                    role="switch"
                    id="allowexam"
                />
            </div>
        </div>
    );
}

export default GroupSettings;
