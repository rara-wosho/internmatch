import { MdModeEditOutline } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { BsCalendar2Date } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "../supabase-client";
import Skeleton from "./ui/Skeleton";

function AboutGroup({ group_id, memberCount }) {
    const [groupData, setGroupData] = useState([]);
    const [fetching, setFetching] = useState(true);

    const fetchGroupData = useCallback(async () => {
        const { data, error } = await supabase
            .from("group")
            .select()
            .eq("group_id", group_id)
            .single();

        if (error) {
            console.log(error);
        }

        if (data) {
            setGroupData(data);
            console.log(data);
        }

        setFetching(false);
    }, []);

    useEffect(() => {
        fetchGroupData();
    }, [fetchGroupData]);

    if (fetching)
        return <Skeleton width="100%" height="150px" containerStyle="mb-2" />;
    return (
        <div className="clr-white p-3 rounded mb-2 shadow-sm">
            <div className="d-flex align-items-center mb-2">
                <p className="mb-0 txt-muted fw-semibold">
                    {groupData.group_name}
                </p>
                <div className="pointer ms-auto px-2 hover-txt-primary smooth">
                    <MdModeEditOutline size={18} />
                </div>
            </div>
            <i className="txt-secondary fs-7 w-100 d-block mb-3">
                {groupData.description !== ""
                    ? groupData.description
                    : "No description provided."}
            </i>

            <div className="d-flex align-items-center mb-1">
                <LuUsers size={16} />
                <p className="mb-0 ms-2 fs-7 txt-secondary">
                    {memberCount} {memberCount > 1 ? "Members" : "Member"}
                </p>
            </div>
            <div className="d-flex align-items-center mb-1">
                <BsCalendar2Date size={15} />
                <p className="mb-0 ms-2 fs-7 txt-secondary">
                    {groupData.created_at.toLocaleString()}
                </p>
            </div>
        </div>
    );
}

export default AboutGroup;
