import { Link, useRouteError } from "react-router-dom";

const ErrorHandle = () => {
    const error = useRouteError();
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-20">NoT Found Error</h2>
            <div className="text-center">
                {
                    error.statusText || error.message
                }
                {
                    error.status === 404 && <div>
                        <p>page not found</p>
                        <p>Go Back Home Pages</p>
                        <Link to="/">
                        <button className="btn btn-accent">Back Home</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorHandle;