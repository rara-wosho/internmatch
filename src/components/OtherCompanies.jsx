import React from "react";
import CompanyCard from "./ui/CompanyCard";

const companyList = [
    {
        imgUrl: "https://i.pinimg.com/736x/ac/19/ec/ac19ecc32a2340c4f647d32a06635f20.jpg",
        companyName: "Techvolution INC",
    },
    {
        imgUrl: "https://i.pinimg.com/736x/b8/56/8d/b8568d010c668dfcea6aa410b78b82a3.jpg",
        companyName: "Qflow Solutions",
    },
    {
        imgUrl: "https://i.pinimg.com/736x/a6/d9/e7/a6d9e7bfe0cf5e56d75b1d9cf26ecd79.jpg",
        companyName: "IBM",
    },
    {
        imgUrl: "https://i.pinimg.com/736x/a1/30/75/a1307526f9ea584b11e128b823eb5cc2.jpg",
        companyName: "Tata Consultancy Services",
    },
];

function OtherCompanies() {
    return (
        <div>
            <h5 className="txt-muted">Other Companies</h5>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 px-1">
                {companyList.map((company, index) => {
                    return (
                        <div className="col px-2 mb-3" key={index}>
                            <CompanyCard
                                url={company.imgUrl}
                                name={company.companyName}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OtherCompanies;
