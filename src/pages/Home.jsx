import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabase-client";
import Navbar from "../components/ui/Navbar";
import RecommendedCompanies from "../components/RecommendedCompanies";
import OtherCompanies from "../components/OtherCompanies";
import SearchCompanyWrapper from "../components/SearchCompanyWrapper";

function Homepage() {
    const { user } = useAuth();

    async function signOutUser() {
        const { error } = await supabase.auth.signOut("local");

        if (error) {
            console.log("error while signin out user", error);
        }
    }

    return (
        <>
            <Navbar />
            {/* <div className="p-4 padding-top">
                Homepage{" "}
                <button className="btn btn-sm btn-danger" onClick={signOutUser}>
                    logout
                </button>
                <p className="mt-3">Email: {user.email}</p>
                <p className="">User id: {user.id}</p>
                <Link to="/admin/dashboard">coordinator's dashboard</Link>
            </div> */}

            <SearchCompanyWrapper />

            <div className="px-3 mx-auto w-100 max-width py-4">
                <RecommendedCompanies />
                <OtherCompanies />
            </div>
        </>
    );
}

export default Homepage;
