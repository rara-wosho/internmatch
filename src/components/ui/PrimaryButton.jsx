import React from "react";

function PrimaryButton({ onClick, label, icon, containerStyle }) {
    return (
        <button
            onClick={onClick}
            className={`${containerStyle} center txt-white fw-semibold primary-btn clr-primary`}
        >
            {icon && <span className="me-1">{icon}</span>}
            {label}
        </button>
    );
}

export default PrimaryButton;
