function SecondaryButton({ onClick, label, icon, containerStyle }) {
    return (
        <button
            onClick={onclick}
            className={`${containerStyle} center py-2 rounded-2 txt-primary fw-semibold secondary-btn`}
        >
            {icon && <span className="me-2">{icon}</span>}
            {label}
        </button>
    );
}

export default SecondaryButton;
