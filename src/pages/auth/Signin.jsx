import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/ui/InputField";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SecondaryButton from "../../components/ui/SecondaryButton";

import { FaPenClip } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

// supabase
import { supabase } from "../../supabase-client";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    async function signInUser(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            // navigate("/home");
        }

        setLoading(false);
    }

    return (
        <div className="clr-body-2 min-h-100 center position-relative">
            <div className="auth-header border-bottom w-100 clr-body-2 px-3">
                <div className="auth-logo py-3 w-100 max-width mx-auto fw-bold">
                    InternMatch
                </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2 rounded-3 w-100 min-h-100 auth-row pt-md-0">
                <div className="col rounded-3 d-flex align-items-start align-items-md-center justify-content-center">
                    <form
                        onSubmit={signInUser}
                        className="d-flex flex-column w-100 p-2 p-md-0"
                        style={{ maxWidth: 400 }}
                    >
                        <div className="mb-4">
                            <div className="rounded-3 clr-primary d-inline-flex txt-white p-2">
                                <FaRegUser size={22} />
                            </div>
                        </div>
                        <h3>
                            <span className="txt-accent">INTERNSHIP</span> made
                            simple
                        </h3>
                        <p className="mb-3 fw-light txt-secondary fs-7">
                            Explore opportunities, support students, and shape
                            careers with ease.
                        </p>

                        {error && (
                            <div className="alert alert-danger">{error}</div>
                        )}
                        <InputField
                            placeholder="Enter Your Email"
                            label="Email"
                            value={email}
                            handleChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <InputField
                            placeholder="Enter Your Password"
                            label="Password"
                            type="password"
                            value={password}
                            handleChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <p className="mb-2 fs-7 txt-primary">
                            Forgot password?
                        </p>
                        <PrimaryButton
                            containerStyle="mt-2 py-2 px-2 rounded-2 shadow-sm"
                            label="Sign in"
                            disabled={loading}
                            loading={loading}
                        />

                        <div className="text-center txt-secondary py-3">Or</div>

                        <Link
                            to="/sign-up"
                            className="w-100 text-decoration-none"
                        >
                            <SecondaryButton
                                icon={<FaPenClip size={14} />}
                                label="Register a company"
                                containerStyle="w-100 py-2 rounded-2"
                            />
                        </Link>
                    </form>
                </div>
                <div className="col d-none d-lg-flex p-0 rounded-3 center clr-secondary-4 flex-column">
                    <h4 className="w-50 text-center">
                        Gain <span className="txt-accent">career-ready</span>{" "}
                        skills and global work experience
                    </h4>
                    <img
                        className="img-fluid"
                        width={450}
                        src="/images/Onboarding-bro.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Signin;
