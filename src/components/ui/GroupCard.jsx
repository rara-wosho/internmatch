import { useCallback, useEffect, useState } from "react";
import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase-client";

function GroupCard({ colView, name, date_created, members, group_id }) {
    const [memberCount, setMemberCount] = useState([]);

    const date = new Date(date_created);

    const fetchMemberCount = useCallback(async () => {
        const { data, error } = await supabase
            .from("students")
            .select()
            .eq("group_id", group_id);

        if (data) {
            console.log("group member :", data);
            console.log("group id :", group_id);
            setMemberCount(data);
        }
    }, []);

    useEffect(() => {
        fetchMemberCount();
    }, []);

    return (
        <Link
            to={`${memberCount.length}/${group_id}`}
            className="text-decoration-none"
        >
            <div
                className={`position-relative ${
                    colView ? "rounded-2" : "rounded-0"
                } clr-white p-3 p-md-3`}
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
                            {name.charAt(0)}
                        </h5>
                    </div>
                )}

                <div className="d-flex align-items-center mb-0 mb-md-2">
                    <h6 className="mb-0 txt-muted fs-7 text-truncate pe-5">
                        {name}
                    </h6>
                    <span></span>
                </div>
                {colView && (
                    <p className="txt-secondary mt-2 mb-0 fs-8">
                        {date.toLocaleDateString()}
                    </p>
                )}

                <div className="d-inline-flex px-2 rounded-pill clr-secondary-4">
                    <p className="txt-primary mb-0 fs-8">
                        {memberCount.length}{" "}
                        {memberCount.length > 1 ? "Members" : "Member"}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default GroupCard;
