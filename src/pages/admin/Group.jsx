import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

import { useEffect, useState } from "react";
import AboutGroup from "../../components/AboutGroup";
import InviteLinkSection from "../../components/InviteLinkSection";

function Group() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        setLoading(true);

        fetch(
            "https://dummyjson.com/users?limit=20&select=firstName,lastName,id,email,height&sortBy=lastName&order=asc"
        )
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.users);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUsers();
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
                        <div className="clr-white p-3 rounded">
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
                                        {users.length}
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

                            <div className="form-check form-switch py-1">
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
                            </div>
                            {loading ? (
                                <p className="py-2">Fetching members...</p>
                            ) : (
                                <table className="table fs-7">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Ban</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users &&
                                            users.map((user) => (
                                                <tr key={user.id}>
                                                    <td>
                                                        {user.lastName},{" "}
                                                        {user.firstName}
                                                    </td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        {user.height < 160 ? (
                                                            <button
                                                                disabled
                                                                className="btn btn-danger btn-sm"
                                                            >
                                                                Banned
                                                            </button>
                                                        ) : (
                                                            <button className="btn btn-outline-danger btn-sm">
                                                                Ban
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>

                    {/* about sectionn  */}
                    <div className="col-12 col-lg-4 px-1 mb-2">
                        <AboutGroup />
                        <InviteLinkSection />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Group;
