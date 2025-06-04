import React from "react";

function PrimaryButton({ onClick, label, icon, containerStyle, loading }) {
    return (
        <button
            onClick={onClick}
            className={`${containerStyle} center txt-white fw-semibold primary-btn clr-primary position-relative`}
        >
            {icon && <span className="me-1">{icon}</span>}
            {label}
            {loading && (
                <div className="position-absolute clr-primary w-100">
                    <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                    ></div>
                </div>
            )}
        </button>
    );
}

export default PrimaryButton;
