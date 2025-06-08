import CompanyCard from "./ui/CompanyCard";

const companyList = [
    {
        imgUrl: "https://i.pinimg.com/736x/3f/03/e3/3f03e3729367070cc115dd539f3795f3.jpg",
        companyName: "Techonologia",
    },
    {
        imgUrl: "https://i.pinimg.com/736x/ce/44/dd/ce44dd287dde0512a2210351913c0418.jpg",
        companyName: "Accenture",
    },
    {
        imgUrl: "https://i.pinimg.com/736x/c0/de/6a/c0de6a6bcd5e45aaaff9d06f9f23d0fe.jpg",
        companyName: "Oracle",
    },
    {
        imgUrl: "https://i.pinimg.com/736x/d9/95/0b/d9950b62affa518babdba80909c7cb2e.jpg",
        companyName: "Iverson Incorporation",
    },
];

function RecommendedCompanies() {
    return (
        <div className="mb-5">
            <h5 className="txt-muted">Recommended for you</h5>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 px-1">
                {companyList.map((company, index) => {
                    return (
                        <div className="col px-2" key={index}>
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

export default RecommendedCompanies;
