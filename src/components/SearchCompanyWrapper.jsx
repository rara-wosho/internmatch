import { IoSearch } from "react-icons/io5";

function SearchCompanyWrapper() {
    return (
        <div className="py-5 clr-primary w-100 padding-top position-relative isolate overflow-hidden">
            <div
                style={{ width: 250, bottom: 50, left: "-1rem" }}
                className="circle-bg clr-secondary rounded-circle"
            ></div>
            <div
                style={{ width: 80, bottom: 22, left: "13rem" }}
                className="circle-bg clr-secondary rounded-circle"
            ></div>
            <div
                style={{ width: 350, bottom: "-13rem", right: "-1rem" }}
                className="circle-bg clr-secondary rounded-circle"
            ></div>
            <div
                style={{ width: 100, bottom: "5rem", right: "20rem" }}
                className="circle-bg clr-secondary rounded-circle"
            ></div>
            <div className="max-width mx-auto center pt-5 px-3 flex-column">
                <h5 className="txt-white text-uppercase text-center">
                    Explore the best companies now
                </h5>

                <form className="w-100" style={{ maxWidth: 600 }}>
                    <div className="d-flex align-items-center clr-white rounded-2 position-relative">
                        <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Search company"
                        />
                        <div className="position-absolute px-3 top-50 center translate-middle-y end-0">
                            <IoSearch className="txt-primary" size={22} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchCompanyWrapper;
