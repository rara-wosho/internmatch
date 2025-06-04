import { useNavigate, useParams } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

import { useCallback, useEffect, useState } from "react";
import AboutGroup from "../../components/AboutGroup";
import InviteLinkSection from "../../components/InviteLinkSection";
import GroupSettings from "../../components/GroupSettings";
import { supabase } from "../../supabase-client";

function Group() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [members, setMembers] = useState([]);
    const { group_id, memberCount } = useParams();

    const fetchMembers = useCallback(async () => {
        setLoading(true);

        const { data, error } = await supabase
            .from("students")
            .select("*")
            .eq("group_id", group_id);

        if (error) {
            console.log("Error fetching members: ", error);
            return;
        }

        if (data) {
            setMembers(data);
        }

        setLoading(false);
    }, []);

    useEffect(() => {
        fetchMembers();
    }, []);

    return (
        <div className="page-wrapper py-2 py-md-3 px-3">
            <div className="group-header d-flex d-lg-none align-items-center mb-1">
                <div
                    onClick={() => navigate(-1)}
                    className="p-1 center pointer"
                >
                    <IoIosArrowBack size={18} />
                    <p className="mb-0 ms-1">Back</p>
                </div>
            </div>
            <div className="group-body">
                <div className="row px-2 flex-column-reverse flex-lg-row">
                    {/* member section  */}
                    <div className="col-12 col-lg-8 px-1 mb-2 h-100">
                        <div className="clr-white p-3 rounded shadow-sm">
                            <div className="d-flex align-items-center mb-2 border-bottom pb-2">
                                <div
                                    onClick={() => navigate(-1)}
                                    className="p-1 hover-lightgray smooth align-items-center d-none d-lg-inline-flex pointer border rounded-circle me-2"
                                >
                                    <IoIosArrowBack size={18} />
                                    {/* <p className="mb-0 ms-1">Back</p>  */}
                                </div>

                                <p className="mb-0 txt-muted">
                                    Group members{" "}
                                    <span className="clr-accent-2 d-inline-flex px-2 rounded-pill txt-accent-dark fs-8">
                                        {members.length}
                                    </span>
                                </p>
                                <div className="ms-auto d-flex align-items-center">
                                    {/* <div className="form-check form-switch">
                                        <label
                                            className="form-check-label"
                                            for="allowexam"
                                        >
                                            Allow to take exam?
                                        </label>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="allowexam"
                                        />
                                    </div> */}
                                </div>
                            </div>

                            {/* <div className="form-check form-switch py-1">
                                <label
                                    className="form-check-label txt-muted pointer"
                                    htmlFor="pingroup"
                                >
                                    Pin group
                                </label>
                                <input
                                    className="form-check-input pointer"
                                    type="checkbox"
                                    role="switch"
                                    id="pingroup"
                                />
                            </div>
                            <div className="form-check form-switch py-1 mb-2">
                                <label
                                    className="form-check-label txt-muted pointer"
                                    htmlFor="allowexam"
                                >
                                    Allowed for examination
                                </label>
                                <input
                                    className="form-check-input pointer"
                                    type="checkbox"
                                    role="switch"
                                    id="allowexam"
                                />
                            </div> */}
                            {loading ? (
                                <div
                                    className="spinner-border spinner-border-sm txt-secondary"
                                    role="status"
                                ></div>
                            ) : (
                                members.length > 0 && (
                                    <table className="table fs-7 w-100 flex-shrink-0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Ban</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {members &&
                                                members.map((user) => (
                                                    <tr key={user.student_id}>
                                                        <td>
                                                            {user.last_name},{" "}
                                                            {user.first_name}
                                                        </td>
                                                        <td>{user.email}</td>
                                                        <td>
                                                            <button className="btn btn-sm btn-outline-danger">
                                                                Ban
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                )
                            )}

                            {members.length === 0 && !loading && (
                                <p className="txt-secondary mb-0 py-3">
                                    There is no member in this group. Copy the
                                    link and share it to let students join.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* about sectionn  */}
                    <div className="col-12 col-lg-4 px-1 mb-2">
                        <AboutGroup
                            group_id={group_id}
                            memberCount={memberCount}
                        />
                        <InviteLinkSection group_id={group_id} />
                        <GroupSettings />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Group;
