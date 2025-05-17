import { useState } from "react";
import GroupCard from "../../components/ui/GroupCard";
import PrimaryButton from "../../components/ui/PrimaryButton";

import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";

function Groups() {
    const [colView, setColView] = useState(true);

    return (
        <div className="page-wrapper py-2 py-md-3 px-3">
            <div className="d-flex align-items-center mb-2 mb-md-3 justify-content-">
                <PrimaryButton
                    containerStyle="fs-7 px-3 py-1 rounded-2"
                    label="New Group"
                />
                <div className="d-flex align-items-center ms-auto">
                    <div
                        onClick={() => {
                            setColView(true);
                        }}
                        className={`${
                            !colView ? "opacity-50 txt-muted" : "txt-primary"
                        } clr-white pointer py-2 ms-2 center rounded-1 px-2`}
                    >
                        <IoGridOutline />
                    </div>
                    <div
                        onClick={() => {
                            setColView(false);
                        }}
                        className={`${
                            colView ? "opacity-50 txt-muted" : "txt-primary"
                        } clr-white pointer py-2 ms-2 center rounded-1 px-2`}
                    >
                        <FaListUl />
                    </div>
                </div>
            </div>
            <div
                className={`row ${
                    colView
                        ? "px-2 px-md-2 row-cols-1 row-cols-md-3 row-cols-lg-4"
                        : " row-cols-1 row-cols-md-2 px-2"
                }`}
            >
                <div
                    className={`col ${
                        colView ? "px-1 mb-2" : "mb-0 px-1 border-bottom"
                    }`}
                >
                    <GroupCard colView={colView} />
                </div>
                <div
                    className={`col ${
                        colView ? "px-1 mb-2" : "mb-0 px-1 border-bottom"
                    }`}
                >
                    <GroupCard colView={colView} />
                </div>
                <div
                    className={`col ${
                        colView ? "px-1 mb-2" : "mb-0 px-1 border-bottom"
                    }`}
                >
                    <GroupCard colView={colView} />
                </div>
                <div
                    className={`col ${
                        colView ? "px-1 mb-2" : "mb-0 px-1 border-bottom"
                    }`}
                >
                    <GroupCard colView={colView} />
                </div>
            </div>
        </div>
    );
}

export default Groups;
