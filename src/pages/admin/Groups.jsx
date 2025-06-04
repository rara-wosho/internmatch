import { useEffect, useState, useCallback } from "react";
import GroupCard from "../../components/ui/GroupCard";
import PrimaryButton from "../../components/ui/PrimaryButton";
import GroupForm from "../../components/GroupForm";

import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { supabase } from "../../supabase-client";
import Skeleton from "../../components/ui/Skeleton";

function Groups() {
    const [colView, setColView] = useState(true);
    const [groups, setGroups] = useState([]);
    const [showGroupForm, setShowGroupForm] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchGroups = useCallback(async () => {
        console.log("fetching group");
        try {
            const { data, error } = await supabase
                .from("group")
                .select()
                .order("created_at", { ascending: false });
            if (error) throw error;
            setGroups(data || []);
        } catch (err) {
            console.error("Error fetching groups:", err.message);
        }

        setLoading(false);
    }, []);

    useEffect(() => {
        fetchGroups();
    }, [fetchGroups]);

    const renderToggleView = () => (
        <div className="d-flex align-items-center ms-auto">
            <div
                onClick={() => setColView(true)}
                className={`${
                    colView ? "txt-primary" : "opacity-50 txt-muted"
                } clr-white pointer py-2 ms-2 center rounded-1 px-2`}
            >
                <IoGridOutline />
            </div>
            <div
                onClick={() => setColView(false)}
                className={`${
                    !colView ? "txt-primary" : "opacity-50 txt-muted"
                } clr-white pointer py-2 ms-2 center rounded-1 px-2`}
            >
                <FaListUl />
            </div>
        </div>
    );

    return (
        <div className="page-wrapper py-2 py-md-3 px-3">
            <div className="d-flex align-items-center mb-2 mb-md-3">
                <PrimaryButton
                    onClick={() => setShowGroupForm(true)}
                    containerStyle="fs-7 px-3 py-1 rounded-1"
                    label="New Group"
                />
                {renderToggleView()}
            </div>

            {showGroupForm && (
                <GroupForm
                    setToggleGroupForm={setShowGroupForm}
                    fetchGroups={fetchGroups}
                />
            )}

            <div
                className={`row ${
                    colView
                        ? "px-2 px-md-2 row-cols-1 row-cols-md-3 row-cols-lg-4"
                        : "px-2 row-cols-1 row-cols-md-2"
                }`}
            >
                {loading ? (
                    <div className="col px-1 mb-2">
                        <Skeleton width="100%" height="150px" />
                    </div>
                ) : (
                    groups.map((group) => (
                        <div
                            key={group.group_id}
                            className={`col ${
                                colView
                                    ? "px-1 mb-2"
                                    : "px-1 border-bottom mb-0"
                            }`}
                        >
                            <GroupCard
                                colView={colView}
                                name={group.group_name}
                                date_created={group.created_at}
                                members={9} // You might want to make this dynamic
                                isShareable={group.is_shareable}
                                group_id={group.group_id}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Groups;
