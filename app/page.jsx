import HeroSection from "./components/HeroSection/HeroSection"
import FilmsInfo from "./components/FilmsInfo/FilmsInfo"
import Protective from "./components/Protective/Protective"
import Realiability from "./components/Reliability/Reliability"

export default function filmsLanding() {
    return (
        <>
            <HeroSection />
            <FilmsInfo />
            <Protective />
            <Realiability />
        </>
    )
}