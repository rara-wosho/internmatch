import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

function InputField({
    type = "text",
    label,
    placeholder = "",
    name = "",
    required,
    value,
    handleChange,
    readOnly,
}) {
    const [showPassword, setShowPassword] = useState(false);

    const getInputType = () => {
        if (type === "password") {
            return showPassword ? "text" : "password";
        }
        return type;
    };

    return (
        <div className="d-flex flex-column mb-3 w-100">
            {label && <label className="form-label mb-1">{label}</label>}
            <div className="position-relative">
                <input
                    type={getInputType()}
                    className="form-control w-100 py-2"
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    readOnly={readOnly}
                />
                {type === "password" && (
                    <div
                        style={{
                            position: "absolute",
                            right: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                        className="pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <FaRegEye size={20} />
                        ) : (
                            <FaRegEyeSlash size={20} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputField;
