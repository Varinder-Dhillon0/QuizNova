import Features from "./components/features";
import Main from "./components/main";
import Testimonial from "./components/testimonial";
import MoreFeatures from "./components/moreFeatures";
import EarlyAccess from "./components/earlyAccess.jsx";
import PageNotFound from "./components/pageNotFound.jsx";

export default function Home() {
    return (
        <>
            
            <Main />
            <Testimonial />
            <Features />
            <MoreFeatures />
            <EarlyAccess />
            <PageNotFound />
        </>
    );
}
