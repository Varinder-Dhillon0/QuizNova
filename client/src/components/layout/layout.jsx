import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AppLoader from "../common/loaders";
import EarlyAccess from "../../pages/landing/components/earlyAccess";
import PageNotFound from "../../pages/landing/components/pageNotFound";
import QuestionSettings from "../../pages/landing/components/questionSettings";
import AttemptQuiz from "../../pages/landing/components/AttemptQuiz";

export default function Layout(){

    const {loading} = useAuth();

    return loading ? <div>loading</div> :
    <>
        <Navbar/>
        {/* <Outlet/>
        <Footer/>
        <EarlyAccess/>
        <PageNotFound/> */}
        {/* <QuestionSettings/> */}
        <AttemptQuiz/>
    </>
}