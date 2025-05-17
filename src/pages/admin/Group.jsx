import { useLocation, useNavigate, useParams } from "react-router-dom";

import { MdModeEditOutline } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { BsCalendar2Date } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";

function Group() {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);

    return (
        <div className="page-wrapper py-2 py-md-3 px-3">
            <div className="group-header"></div>
            <div className="group-body">
                <div className="row px-2 flex-column-reverse flex-lg-row">
                    {/* member section  */}
                    <div className="col-12 col-lg-8 px-1 mb-2">
                        <div className="clr-white p-3 rounded">
                            <div className="d-flex align-items-center mb-2">
                                <div
                                    onClick={() => navigate(-1)}
                                    className="hover-primary smooth rounded-circle p-1 center pointer border"
                                >
                                    <IoMdArrowRoundBack size={20} />
                                </div>
                                <h5 className="mb-0 ms-2">Batch 2024 - 2025</h5>

                                <div className="pointer ms-auto px-2 hover-txt-primary smooth">
                                    <MdModeEditOutline size={18} />
                                </div>
                            </div>

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>@social</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* about sectionn  */}
                    <div className="col-12 col-lg-4 px-1 mb-2">
                        <div className="clr-white p-3 rounded mb-2">
                            <div className="d-flex align-items-center mb-2">
                                <h5 className="mb-0">About</h5>

                                <div className="pointer ms-auto px-2 hover-txt-primary smooth">
                                    <MdModeEditOutline size={18} />
                                </div>
                            </div>
                            <i className="txt-secondary fs-7 w-100 d-block mb-3">
                                No description provided.
                            </i>

                            <div className="d-flex align-items-center mb-1">
                                <LuUsers size={16} />
                                <p className="mb-0 ms-2 fs-7 txt-secondary">
                                    33 Members
                                </p>
                            </div>
                            <div className="d-flex align-items-center mb-1">
                                <BsCalendar2Date size={15} />
                                <p className="mb-0 ms-2 fs-7 txt-secondary">
                                    August 20 2025
                                </p>
                            </div>
                        </div>
                        <div className="clr-white p-3 rounded">
                            <div className="d-flex align-items-center mb-2">
                                <h5 className="mb-0">Invitation link</h5>

                                <div className="rounded-pill txt-accent-dark clr-accent-2 fs-8 d-inline-block ms-auto px-2">
                                    Active
                                </div>
                            </div>

                            <i className="fs-8 txt-secondary mb-1 d-block">
                                Invite students to create an acount for this
                                group.
                            </i>
                            <div className="d-flex align-items-center clr-lightgray rounded-1 p-1 mb-3 w-100">
                                <p className="mb-0 txt-muted txt-primary fs-7 text-truncate">
                                    https://invitationlinkofsiramin
                                </p>
                            </div>

                            <button className="btn btn-danger btn-sm">
                                Deactivate link
                            </button>
                            <button className="btn btn-outline-secondary ms-2 btn-sm">
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Group;
