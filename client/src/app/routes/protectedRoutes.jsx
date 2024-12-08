import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AppLoader from "../../components/loaders/loaders";

export default function ProtectedRoute() {
    const { loading, loggedin } = useAuth();

    console.log("protected : loading : " + loading + "logged in : " + loggedin);

    if (loading) {
        return <AppLoader/>;
    }

    return(loggedin ? <Outlet /> : <Navigate to="/login" />);
}
