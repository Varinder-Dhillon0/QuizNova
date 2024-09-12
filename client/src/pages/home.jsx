import Features from "../components/landing/features"
import Main from "../components/landing/main"
import Testimonial from "../components/landing/testimonial"
import MoreFeatures from "../components/landing/moreFeatures"
import BlackFeatures from "../components/landing/blackFeatures"

export default function Home() {
  return (
    <>
        <Main/>
        <Testimonial/>
        <Features/>
        <MoreFeatures/>
        <BlackFeatures/>
    </>
  )
}
