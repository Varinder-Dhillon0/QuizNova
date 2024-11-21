import Features from "./components/features";
import Main from "./components/main";
import Testimonial from "./components/testimonial";
import MoreFeatures from "./components/moreFeatures";
import Share from "../../components/common/Share";
import Login from "../login.jsx";
import SubmitQuizSection from "../../components/common/submitQuiz";
import QuizOverviewCard from "../../components/common/QuizOverviewCard.jsx";
import BrowseQuizzes from "./components/BrowseQuizzes.jsx";
import QuizStartPage from "./components/QuizStartPage.jsx";

export default function Home() {
    return (
        <>
            <Main />
            <Testimonial />
            <Features />
            <MoreFeatures />
            {/* <SubmitQuizSection /> */}
            {/* <Share></Share> */}
            <Login></Login>
            {/* <BrowseQuizzes/> */}
            <QuizStartPage/>
        </>
    );
}
