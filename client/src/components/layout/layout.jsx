import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import EarlyAccess from "../../pages/landing/components/earlyAccess";
import PageNotFound from "../../pages/landing/components/pageNotFound";

export default function Layout() {
    const { loading } = useAuth();

    return loading ? (
        <div>loading</div>
    ) : (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
