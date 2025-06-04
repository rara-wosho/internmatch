import InputField from "./ui/InputField";

import { IoClose } from "react-icons/io5";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import { useState } from "react";
import { supabase } from "../supabase-client";

function GroupForm({ setToggleGroupForm, fetchGroups }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase
            .from("group")
            .insert({ group_name: name, description: description });

        if (error) {
            console.log("error adding", error);
        } else {
            fetchGroups();
            setToggleGroupForm(false);
        }
        setLoading(false);
    };

    return (
        <div className="modal-backdrop center p-2">
            <div
                className="group-form p-4 clr-white shadow-sm rounded-3 w-100"
                style={{ maxWidth: 500 }}
            >
                <div className="d-flex align-items-center mb-2 justify-content-between">
                    <p className="mb-0 txt-primary fs-5">Create New Group</p>
                    <button
                        className="btn hover-lightgray center p-1 rounded-circle "
                        onClick={() => setToggleGroupForm(false)}
                    >
                        <IoClose size={22} />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Group name"
                        placeholder="Enter the name of the group"
                        required
                        handleChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <InputField
                        label="Description"
                        placeholder="Enter description(optional)"
                        handleChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <div
                        style={{ gap: 8 }}
                        className="d-flex align-items-center justify-content-end"
                    >
                        <SecondaryButton
                            onClick={() => setToggleGroupForm(false)}
                            label="Cancel"
                            containerStyle="px-3 py-1 rounded-1"
                            role="button"
                        />
                        <PrimaryButton
                            containerStyle="px-3 py-1 rounded-1 "
                            label={loading ? "Creating" : "Create Group"}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GroupForm;
