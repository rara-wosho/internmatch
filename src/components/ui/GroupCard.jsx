import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";

function GroupCard({ colView }) {
    return (
        <Link to="khygrd-34565" className="text-decoration-none">
            <div
                className={`position-relative ${
                    colView ? "rounded-2" : "rounded-0"
                } clr-white p-2 p-md-3`}
            >
                <div
                    style={{ right: 10, top: 8 }}
                    className="ms-auto txt-muted px-1 position-absolute clr-white rounded-circle center py-1"
                >
                    <SlOptions />
                </div>

                {colView && (
                    <div className="rounded-2 clr-accent d-inline-flex center px-3 py-2 mb-3">
                        <h5 className="mb-0 fw-bold txt-white text-uppercase">
                            L
                        </h5>
                    </div>
                )}

                <div className="d-flex align-items-center mb-0 mb-md-2">
                    <h6 className="mb-0 txt-muted fs-7 text-truncate pe-5">
                        Batch 2024 - 2025
                    </h6>
                    <span></span>
                </div>
                {colView && (
                    <p className="txt-secondary mt-2 mb-0 fs-8">
                        August 12 2023
                    </p>
                )}

                <div className="d-inline-flex px-2 rounded-pill clr-secondary-4">
                    <p className="txt-primary mb-0 fs-8">12 Members</p>
                </div>
            </div>
        </Link>
    );
}

export default GroupCard;
