import Features from "./components/features";
import Main from "./components/main";
import Testimonial from "./components/testimonial";
import MoreFeatures from "./components/moreFeatures";
import BlackFeatures from "./components/blackFeatures";
import SubmitQuizSection from "../../components/common/submitQuiz";

export default function Home() {
    return (
        <>
            <Main />
            <Testimonial />
            <Features />
            <MoreFeatures />
            <BlackFeatures />
            <SubmitQuizSection />
        </>
    );
}
