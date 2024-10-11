import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {
    const { loading, loggedin } = useAuth();

    console.log("protected : loading : " + loading + "logged in : " + loggedin);

    if (loading) {
        return <div>Loading...</div>;
    }

    return(loggedin ? <Outlet /> : <Navigate to="/login" />);
}
