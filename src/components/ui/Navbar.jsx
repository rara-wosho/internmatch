import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom">
            <div className="max-width w-100 mx-auto d-flex align-items-center py-2 px-3">
                <Link
                    to="/home"
                    className="text-decoration-none txt-muted fw-semibold"
                >
                    InternMatch
                </Link>
                <div
                    className="navbar-toggler ms-auto border-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <GiHamburgerMenu size={22} />
                </div>
                {/* <button
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasNavbarLabel"
                        >
                            InternMatch
                        </h5>
                        <button
                            type="button"
                            className="btn-close ms-auto"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 d-flex align-items-start align-items-lg-center justify-content-start">
                            <li className="nav-item mb-lg-0 mb-2">
                                <Link
                                    className="hover-txt-primary smooth fw-semibold txt-primary text-decoration-none px-lg-3"
                                    to="/home"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mb-lg-0 mb-2">
                                <Link
                                    className="hover-txt-primary smooth fw-semibold txt-muted text-decoration-none px-lg-3"
                                    to="/home"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item mb-lg-0 mb-2">
                                <Link
                                    className="hover-txt-primary smooth fw-semibold txt-muted text-decoration-none px-lg-3"
                                    to="/home"
                                >
                                    How it works
                                </Link>
                            </li>
                            <li className="nav-item mb-lg-0 mb-2">
                                <Link
                                    className="hover-txt-primary smooth fw-semibold txt-muted text-decoration-none px-lg-3"
                                    to="/admin/dashboard"
                                >
                                    <img
                                        width={30}
                                        height={30}
                                        src="https://i.pinimg.com/736x/ee/35/4f/ee354f4bdd0b747df43975cd1184a68b.jpg"
                                        className="rounded-circle"
                                        alt=""
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
