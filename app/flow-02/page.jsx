'use client'

import Header from "../components/Header/Header"
import HeroSection from "../components/HeroSection/HeroSection"
import FilmsInfo from "../components/FilmsInfo/FilmsInfo"
import Protective from "../components/Protective/Protective"
import Realiability from "../components/Reliability/Reliability"
import AdvantageSection from "../components/Advantage/Advantage"
import Faq from "../components/Faq/Faq"
import Feedback from "../components/Feedback/Feedback"
import Explanation from "../components/Explanation/Explanation"
import ScrollToTop from "../components/upBtn/upBtn"
import LandingWrap from "../components/LandingWrap/LandingWrap"


import { getStoredAnswers } from "../actions/saveToStorage"

export default function filmsLanding() {
    
    console.log(getStoredAnswers());
    
    return (
        <>
            <Header />
            <LandingWrap>
                <AdvantageSection 
                        title={'DU HAST VERSPIELTE HAUSTIERE?'}
                        bgImage={"/images/advantage_bg_2.png"}
                        href={'/flow-02/choose-film'}/>
                <HeroSection href={'/flow-02/choose-film'}/>
                <FilmsInfo />
                <Protective href={'/flow-02/choose-film'}/>
                <Realiability />
                <Feedback />
                <Faq />
                <Explanation href={'/flow-02/choose-film'} flow={'flow-02'}/>
            </LandingWrap>
            <ScrollToTop />
        </>
    )
}