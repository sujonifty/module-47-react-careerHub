import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops!!!</h1>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default ErrorPage;