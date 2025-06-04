function SecondaryButton({ onClick, label, icon, containerStyle, role }) {
    return (
        <button
            type={role}
            onClick={onClick}
            className={`${containerStyle} center txt-primary fw-semibold secondary-btn`}
        >
            {icon && <span className="me-2">{icon}</span>}
            {label}
        </button>
    );
}

export default SecondaryButton;
