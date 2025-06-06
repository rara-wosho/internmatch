import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabase-client";

function Homepage() {
    const { user } = useAuth();

    async function signOutUser() {
        const { error } = await supabase.auth.signOut("local");

        if (error) {
            console.log("error while signin out user", error);
        }
    }

    return (
        <div className="p-4">
            Homepage{" "}
            <button className="btn btn-sm btn-danger" onClick={signOutUser}>
                logout
            </button>
            <p className="mt-3">Email: {user.email}</p>
            <p className="">User id: {user.id}</p>
            <Link to="/admin/dashboard">coordinator's dashboard</Link>
        </div>
    );
}

export default Homepage;
