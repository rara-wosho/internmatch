import { FaChevronRight } from "react-icons/fa6";
import { FaShare } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

import PrimaryButton from "./PrimaryButton";

function CompanyCard({ name, url }) {
    return (
        <div className="company-card clr-white h-100 rounded-3 overflow-hidden pointer">
            <div
                className="img-wrapper position-relative"
                style={{ aspectRatio: 5 / 3 }}
            >
                <div
                    className="position-absolute clr-white rounded-circle center p-2 txt-primary next-icon shadow-sm"
                    style={{ zIndex: 10, right: 22, bottom: 0 }}
                >
                    <FaChevronRight />
                </div>
                <img
                    src={url}
                    className="w-100 position-relative"
                    style={{ objectFit: "cover", aspectRatio: 5 / 3 }}
                    alt="company img"
                />
            </div>
            <div className="p-3 pt-2">
                <p className="mb-0 company-card-title txt-muted fw-semibold text-truncate">
                    {name}
                </p>
                <p className="txt-secondary fs-7 mb-2 text-truncate">
                    Lorem ipsum dolor sit.
                </p>

                <div className="d-flex align-items-center ms-auto pt-1">
                    <PrimaryButton
                        label="View"
                        containerStyle="fs-7 rounded-pill px-3 shadow-sm"
                    />

                    <div className="txt-muted ms-auto rounded-circle border center p-2">
                        <FaShare size={12} />
                    </div>
                    <div className="txt-muted ms-1 rounded-circle border center p-2">
                        <IoSearch size={12} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyCard;
