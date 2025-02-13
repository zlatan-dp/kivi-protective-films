import HeroSection from "./components/HeroSection/HeroSection"
import FilmsInfo from "./components/FilmsInfo/FilmsInfo"
import Protective from "./components/Protective/Protective"
import Realiability from "./components/Reliability/Reliability"
import AdvantageSection from "./components/Advantage/Advantage"
import Faq from "./components/Faq/Faq"

export default function filmsLanding() {
    return (
        <>
            <HeroSection />
            <FilmsInfo />
            <Protective />
            <Realiability />
            <AdvantageSection 
                title={<>DEINE KINDER<br /> SPIELEN AKTIV?</>}
                bgImage={"/images/advantage_bg_1.png"}/>
            <AdvantageSection 
                title={'DU HAST VERSPIELTE HAUSTIERE?'}
                bgImage={"/images/advantage_bg_2.png"}/>
            <AdvantageSection 
                title={'DU SPIELST AUF HÖCHSTEM LEVEL?'}
                bgImage={"/images/advantage_bg_3.png"}/>
            <AdvantageSection 
                title={<>DU BIST<br /> GESCHÄFTS&shy;INHABER?</>}
                bgImage={"/images/advantage_bg_4.png"}/>
            <AdvantageSection 
                title={'DU SCHÄTZT HOCHWERTIGE TECHNIK?'}
                bgImage={"/images/advantage_bg_5.png"}/>
            <Faq />
        </>
    )
}