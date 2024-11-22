import Features from "./components/features";
import Main from "./components/main";
import Testimonial from "./components/testimonial";
import MoreFeatures from "./components/moreFeatures";

export default function Home() {
    return (
        <>
            <Main />
            <Testimonial />
            <Features />
            <MoreFeatures />
        </>
    );
}
