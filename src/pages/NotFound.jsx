import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="p-3">
            Page not found. <Link to="/">Go back home</Link>
        </div>
    );
}

export default NotFound;
