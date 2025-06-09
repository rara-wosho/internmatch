import { Link, useParams } from "react-router-dom";
import InputField from "../../components/ui/InputField";
import PrimaryButton from "../../components/ui/PrimaryButton";
import StudentRegistrationSidebar from "../../components/StudentRegistrationSidebar";

import { FaCheck } from "react-icons/fa6";
import { TiWarning } from "react-icons/ti";

import { useEffect, useState } from "react";
import { supabase } from "../../supabase-client";
import ChooseInterests from "../../components/ChooseInterests";

function StudentRegistration() {
    const [next, setNext] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "male",
        school: "",
        course: "",
        year: "1",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [fetchingGroup, setFetchingGroup] = useState(true);
    const [groupData, setGroupData] = useState([]);

    const { group_id } = useParams();

    // fetch group info to check link status
    useEffect(() => {
        async function fetchGroupInfo() {
            const { data: group, error } = await supabase
                .from("group")
                .select()
                .eq("group_id", group_id)
                .single();

            if (error) {
                console.log(error);
                setFetchingGroup(false);
                return;
            }
            if (group) {
                setGroupData([group]);
                setFetchingGroup(false);
                console.log("group data: ", group);
            }
        }

        fetchGroupInfo();
    }, []);

    const handleChange = (e) => {
        const { value, name } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords did not match.");
        } else {
            console.log("creating user");
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                console.log("error while authenticating: ", error);
                setError(error.message);
                setLoading(false);
                return;
            }

            if (data) {
                const userId = data.user.id;

                const { error: infoError } = await supabase
                    .from("students")
                    .insert({
                        student_id: userId,
                        role: "student",
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        gender: formData.gender,
                        school: formData.school,
                        course: formData.course,
                        year: formData.year,
                        email: formData.email,
                        group_id: group_id,
                    });

                if (infoError) {
                    console.log(
                        "Error while registering student info:",
                        infoError
                    );
                    setError(infoError.message);
                } else {
                    console.log("Student successfully registered!");
                    setNext(true);
                    setError("");
                }
                setLoading(false);
            }
        }
    };

    return (
        <div className="min-h-100 student-registration-page w-100 clr-body-2 d-flex position-relative align-items-start">
            {/* sidebar  */}
            <StudentRegistrationSidebar />

            {/* body  */}
            {fetchingGroup ? (
                <div className="p-4 w-100 min-h-100 center">
                    <div className="spinner-border" role="status"></div>
                </div>
            ) : groupData.length === 0 ? (
                <div className="p-4 p-lg-5 min-h-100 center border w-100">
                    <p className="mb-0 txt-muted">
                        No data available. Make sure that your invitation link
                        is valid.
                    </p>
                </div>
            ) : groupData[0].is_shareable ? (
                //Main form when group is valid and shareable
                next ? (
                    <ChooseInterests />
                ) : (
                    <div className="student-registration-wrapper p-3 p-md-4 rounded-3  d-flex flex-column align-items-start w-100">
                        <div className="p-3 rounded-circle mx-auto mx-lg-0 clr-primary shadow-sm mb-3"></div>
                        <h5 className="txt-primary text-center w-100 text-lg-start">
                            You are invited to{" "}
                            <span className="txt-accent text-uppercase">
                                create an account
                            </span>
                        </h5>
                        <div className="d-flex flex-column align-items-center w-100 mb-4 align-items-lg-start border-bottom">
                            <p className="mb-1 txt-secondary fs-7 fw-light">
                                Group Name:{" "}
                                <em className="fw-semibold">
                                    {groupData[0].group_name}
                                </em>
                            </p>
                            <div className="mb-4 txt-secondary fs-7 fw-light d-flex align-items-center">
                                Status:{" "}
                                <em className="fw-semibold mx-1">Active</em>{" "}
                                <div
                                    className="bg-success rounded-circle d-inline-block"
                                    style={{ width: 12, height: 12 }}
                                ></div>
                            </div>
                        </div>

                        {error && (
                            <div className="alert alert-danger w-100 mb-4">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="w-100 ">
                            <h6>Tell us something about yourself</h6>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 px-2 mb-4">
                                <div className="col px-1">
                                    <InputField
                                        name="firstName"
                                        label="First Name"
                                        placeholder="Enter your first name"
                                        required
                                        value={formData.firstName}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col px-1">
                                    <InputField
                                        name="lastName"
                                        label="Last Name"
                                        placeholder="Enter your last name"
                                        required
                                        value={formData.lastName}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col px-1">
                                    <p className="form-label mb-1">Gender</p>
                                    <select
                                        className="form-select bg-transparent form-control py-2"
                                        name="gender"
                                        required
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <h6>Academic Information</h6>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 px-2 ">
                                <div className="col px-1">
                                    <InputField
                                        name="school"
                                        label="School"
                                        required
                                        value={formData.school || ""}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col px-1">
                                    <InputField
                                        name="course"
                                        label="Course"
                                        required
                                        value={formData.course || ""}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col px-1">
                                    <p className="form-label mb-1">Year</p>
                                    <select
                                        className="form-select bg-transparent form-control py-2"
                                        name="year"
                                        required
                                        value={formData.year}
                                        onChange={handleChange}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>

                            <h6>Credentials</h6>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 px-2">
                                <div className="col px-1">
                                    <InputField
                                        name="email"
                                        label="Email"
                                        placeholder="Enter a valid email address"
                                        required
                                        value={formData.email || ""}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col px-1">
                                    <InputField
                                        name="password"
                                        label="Password"
                                        placeholder="Must be at least 6 characters"
                                        type="password"
                                        required
                                        value={formData.password || ""}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="col px-1">
                                    <InputField
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        placeholder="Re-enter your password"
                                        type="password"
                                        required
                                        value={formData.confirmPassword || ""}
                                        handleChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="row row-cols-1 row-cols-md-3 mt-4 px-2">
                                <div className="col px-1 mb-3 mb-lg-0">
                                    <PrimaryButton
                                        label="Create Account"
                                        containerStyle="rounded-2 shadow-sm py-1 px-2 w-100"
                                        icon={<FaCheck className="me-1" />}
                                        disabled={loading}
                                        loading={loading}
                                    />
                                </div>
                                <div className="col px-1"></div>
                                <div className="col px-1 d-flex justify-content-start align-items-center">
                                    <p className="text-decoration-none text-center text-md-start w-100 txt-muted mb-0">
                                        Already have an account?{" "}
                                        <Link
                                            to="/"
                                            className="text-decoration-none txt-primary"
                                        >
                                            Sign In
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                )
            ) : (
                //Group exists but is not shareable
                <div className="p-4 p-lg-5 min-h-100 center flex-column border w-100">
                    <img
                        width={210}
                        height={210}
                        src="/images/Oh no-cuate.png"
                        alt="oh no icon"
                    />
                    <p className="mb-2 fw-semibold mt-2 txt-muted text-center">
                        This group is currently not accepting new registrations.
                    </p>
                    <small className="txt-secondary text-center">
                        Please wait until the group creator decides to accept
                        new members again.
                    </small>
                </div>
            )}
        </div>
    );
}

export default StudentRegistration;
