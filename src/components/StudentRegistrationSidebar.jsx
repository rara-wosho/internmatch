import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoMdBook } from "react-icons/io";

function StudentRegistrationSidebar() {
    return (
        <div className="student-registration-sidebar overflow-hidden clr-primary p-5 txt-white justify-content-between align-items-start d-none d-lg-flex flex-column">
            <div className="circle-bg circle-1 clr-secondary rounded-circle"></div>
            <div className="circle-bg circle-2 clr-secondary rounded-circle"></div>
            <div
                style={{
                    right: "1rem",
                    bottom: "11rem",
                    width: 80,
                    opacity: 0.2,
                }}
                className="circle-bg clr-secondary rounded-circle"
            ></div>
            <div className="bottom flex-column d-flex align-items-start">
                <h5 className="fw-bold mb-5">
                    <img
                        width="26"
                        className="rounded-circle me-2"
                        style={{ objectFit: "cover" }}
                        src="https://i.pinimg.com/736x/0b/92/1f/0b921f0878a6e549b4c31efc29383d1b.jpg"
                        alt=""
                    />
                    InternMatch
                </h5>
                <h2 className="text-start fw-semibold mb-4">
                    One Platform to Streamline Your Skills and Find Quality
                    Internships
                </h2>

                <p className="txt-light mb-4">Lorem ipsum dolor sit amet.</p>

                <div
                    className="d-flex align-items-center mb-4 pointer"
                    style={{ gap: 8 }}
                >
                    <FaFacebook size={24} />
                    <AiFillInstagram size={31} />
                    <MdEmail size={31} />
                </div>
            </div>
            <div className="top d-flex align-items-center">
                <IoMdBook />
                <small className="txt-light fs-7 ms-2">
                    Terms and conditions
                </small>
            </div>
        </div>
    );
}

export default StudentRegistrationSidebar;
