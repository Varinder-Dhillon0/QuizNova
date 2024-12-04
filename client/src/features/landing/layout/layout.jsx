import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import AppLoader from "../../../components/loaders";
import { useEffect } from "react";

export default function Layout() {
    const { loading } = useAuth();

    return loading ? (
        <div>
            <AppLoader/>
        </div>
    ) : (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
