import { Link } from "react-router-dom";
import InputField from "../../components/ui/InputField";
import PrimaryButton from "../../components/ui/PrimaryButton";
import StudentRegistrationSidebar from "../../components/StudentRegistrationSidebar";

import { FaCheck } from "react-icons/fa6";

function StudentRegistration() {
    return (
        <div className="min-h-100 student-registration-page w-100 clr-body-2 d-flex position-relative align-items-start">
            {/* sidebar  */}
            <StudentRegistrationSidebar />

            {/* body  */}
            <div className="student-registration-wrapper p-5 rounded-3  d-flex flex-column align-items-start w-100">
                <div className="p-3 rounded-circle clr-primary shadow-sm mb-3"></div>
                <h5 className="txt-primary">
                    You are invited to{" "}
                    <span className="txt-accent text-uppercase">
                        create an account
                    </span>
                </h5>
                <p className="mb-4 txt-secondary fw-light">
                    Mr Amin is inviting you to be a part of their group
                </p>

                <form className="w-100 ">
                    <h6>Tell us something about yourself</h6>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 px-2 mb-4">
                        <div className="col px-1">
                            <InputField
                                label="First Name"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="col px-1">
                            <InputField
                                label="Last Name"
                                placeholder="Enter your last name"
                            />
                        </div>
                        <div className="col px-1">
                            <InputField label="Gender" />
                        </div>
                    </div>
                    <h6>Academic Information</h6>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 px-2 ">
                        <div className="col px-1">
                            <InputField label="School" />
                        </div>
                        <div className="col px-1">
                            <InputField label="Course" />
                        </div>
                        <div className="col px-1">
                            <InputField label="Year" />
                        </div>
                    </div>
                    <h6>Credentials</h6>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 px-2">
                        <div className="col px-1">
                            <InputField
                                label="Email"
                                placeholder="Enter a valid email address"
                            />
                        </div>
                        <div className="col px-1">
                            <InputField
                                label="Password"
                                placeholder="Enter a password"
                            />
                        </div>
                        <div className="col px-1">
                            <InputField
                                label="Confirm Password"
                                placeholder="Re-enter your password"
                            />
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 mt-4 px-2">
                        <div className="col px-1 d-flex justify-content-start align-items-center">
                            <p className="text-decoration-none txt-muted mb-0">
                                Already have an account?{" "}
                                <Link
                                    to="/sign-in"
                                    className="text-decoration-none txt-primary"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                        <div className="col px-1"></div>
                        <div className="col px-1">
                            <PrimaryButton
                                label="Create Account"
                                icon={<FaCheck className="me-1" />}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentRegistration;
