"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"

import QuizWrap from "../components/QuizWrap/QuizWrap"
import WhiteBtn from "../components/whiteBtn/whiteBtn";

export default function ThanksPage () {
    const router = useRouter()

    const goToNextStep = () => {
        router.push("/")     
    }

    return (
        <QuizWrap>
            <div className={styles.imageWrap}></div>
            <h2 className={styles.title}>Vielen Dank für Ihre Antwort!</h2>            
            <WhiteBtn marginTop="0px" onClick={goToNextStep}>ZURÜCK ZUR WEBSITE</WhiteBtn>
        </QuizWrap>
    )
}