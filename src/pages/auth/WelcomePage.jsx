import { Link } from "react-router-dom";

function WelcomePage() {
    return (
        <div
            style={{ paddingTop: "5rem" }}
            className="center min-h-100 welcome-page flex-column clr-body-2 px-4 pb-5"
        >
            <h1 className="text-center main-text mb-3">
                Top platform for <span className="txt-accent">Guaranteed</span>{" "}
                Internships
            </h1>

            <h4 className="txt-secondary font-italic mb-4">
                <em>What are you looking for?</em>
            </h4>

            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-3 mb-md-0 px-2">
                    <Link to="/sign-in" className="text-decoration-none">
                        <div className="clr-white h-100 p-4 rounded-3 border center flex-column">
                            <img
                                className="img-fluid"
                                width="200"
                                src="images/Online resume-cuate.png"
                                alt=""
                            />
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 txt-secondary text-center fw-semibold">
                                    I'm looking for an internship
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col mb-3 mb-md-0 px-2">
                    <Link to="" className="text-decoration-none">
                        <div className="clr-white h-100 p-4 rounded-3 border center flex-column">
                            <img
                                className="img-fluid"
                                width="200"
                                src="images/Online resume-bro.png"
                                alt=""
                            />
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 txt-secondary text-center fw-semibold">
                                    I'm looking for an intern for my company
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
