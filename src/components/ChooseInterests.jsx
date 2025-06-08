import { useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";
import CheckboxPill from "./ui/CheckboxPill";
import { Link } from "react-router-dom";

const interestOptions = [
    "Web Development",
    "Back-end Development",
    "Front-end Development",
    "UI/UX Design",
    "Mobile App Development",
    "Game Development",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Cybersecurity",
    "Networking",
    "Cloud Computing",
    "DevOps",
    "Database Management",
    "Software Engineering",
    "Project Management",
    "IT Support",
    "AR/VR Development",
    "Embedded Systems",
    "IoT (Internet of Things)",
    "Digital Marketing",
    "Quality Assurance (QA)",
    "Business Intelligence",
    "Technical Writing",
    "Robotics",
    "API Development",
    "Version Control (Git)",
    "Scripting (Python, Bash, etc.)",
    "E-commerce Platforms",
    "CRM Tools (e.g., Salesforce)",
    "ERP Systems",
    "Ethical Hacking",
];

function ChooseInterests({ onSave }) {
    const [selectedInterests, setSelectedInterests] = useState([]);

    const handleCheckboxChange = (interest) => {
        setSelectedInterests((prev) =>
            prev.includes(interest)
                ? prev.filter((i) => i !== interest)
                : [...prev, interest]
        );
    };

    const handleSave = () => {
        onSave(selectedInterests);
    };

    return (
        <div className="p-3 p-md-4">
            <h3 className="txt-secondary mb-1">
                <span className="txt-primary">Interests</span> or
                <span className="txt-primary"> Skills</span>
            </h3>
            <small className="txt-secondary">
                Please select all interests and skills that apply to you.
            </small>

            <div className="mt-3 row row-cols-1 row-cols-md-2 row-cols-lg-4 px-1 mb-3">
                {interestOptions.map((interest) => (
                    <div className="col px-2 mb-2" key={interest}>
                        <CheckboxPill
                            label={interest}
                            selectedInterests={selectedInterests}
                            handleCheckboxChange={handleCheckboxChange}
                            containerStyle="w-100"
                        />
                    </div>
                ))}
            </div>
            <Link className="text-decoration-none" to="/home">
                <PrimaryButton
                    label="Save and get started"
                    containerStyle="rounded-2 py-2 px-3"
                />
            </Link>
        </div>
    );
}

export default ChooseInterests;
