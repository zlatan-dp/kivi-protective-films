'use client'

import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import FilmsInfo from "./components/FilmsInfo/FilmsInfo"
import Protective from "./components/Protective/Protective"
import Realiability from "./components/Reliability/Reliability"
import AdvantageSection from "./components/Advantage/Advantage"
import Faq from "./components/Faq/Faq"
import Feedback from "./components/Feedback/Feedback"
import Explanation from "./components/Explanation/Explanation"

import { getStoredAnswers } from "./actions/saveToStorage"

export default function filmsLanding() {

    console.log(getStoredAnswers());
    

    return (
        <>
            <Header />
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
                title={'DU BIST EIN AKTIVER GAMER?'}
                bgImage={"/images/advantage_bg_3.png"}/>
            <AdvantageSection 
                title={<>Fieberst du<br /> voll mit?!</>}
                bgImage={"/images/advantage_bg_6.png"}/>
            <AdvantageSection 
                title={<>DU BIST<br /> GESCHÄFTS&shy;INHABER?</>}
                bgImage={"/images/advantage_bg_4.png"}/>
            <AdvantageSection 
                title={'DU SCHÄTZT HOCHWERTIGE TECHNIK?'}
                bgImage={"/images/advantage_bg_5.png"}/>
            <Faq />
            <Feedback />
            <Explanation />
        </>
    )
}