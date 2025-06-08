function CheckboxPill({
    label,
    selectedInterests,
    handleCheckboxChange,
    containerStyle,
}) {
    return (
        <label
            className={`checkbox-pill ${
                selectedInterests.includes(label) ? "selected" : ""
            } ${containerStyle} border px-3 fs-7 py-2 rounded-2 smooth mb-2 pointer`}
        >
            <input
                type="checkbox"
                value={label}
                checked={selectedInterests.includes(label)}
                onChange={() => handleCheckboxChange(label)}
                className="position-absolute invisible"
            />
            {label}
        </label>
    );
}

export default CheckboxPill;
