import React from "react";

function PrimaryButton({ onClick, label, icon, containerStyle }) {
    return (
        <button
            onClick={onclick}
            className={`${containerStyle} center py-2 rounded-2 txt-white fw-semibold primary-btn clr-primary w-100`}
        >
            {icon && <span className="me-1">{icon}</span>}
            {label}
        </button>
    );
}

export default PrimaryButton;
