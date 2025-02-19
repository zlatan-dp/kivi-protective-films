"use client"

import {useRouter} from "next/navigation"

import styles from "./page.module.css";

import classNames from "classnames";

import QuizWrap from "../components/QuizWrap/QuizWrap"
import CloseBtn from "../components/closeBtn/closeBtn"
import OrderInfo from "./OrderInfo/OrderInfo";
import TranspBtn from "../components/transparentBtn/transparentBtn";
import WhiteBtn from "../components/whiteBtn/whiteBtn";



export default function ChooseFilm() {

    const router = useRouter()

    const goToNextStep = () => {
        router.push("/order-info")     
    }

    return (        
            <QuizWrap>
                <CloseBtn />
                <h2 className={styles.title}>Welche Folie<br/>benötigen Sie?</h2>
                <div className={styles.chooseWrap}>
                    <p className={styles.chooseText}>Diagonale</p>
                    <p className={styles.chooseText}>Anzahl</p>
                </div>
                <div className={styles.orderWrap}>
                    <OrderInfo />  
                    <OrderInfo />  
                </div>
                <p className={styles.orderText}>Sie haben 1 Folie für 1 TV-Diagonale ausgewählt</p>
                <TranspBtn marginTop = "20px">TV-DIAGONALE HINZUFÜGEN</TranspBtn>
                <WhiteBtn marginTop = "20px" onClick={goToNextStep}>WEITER</WhiteBtn>
                <div className={styles.progressBars}>
                    <div className={classNames(styles.bar, styles.filled)}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </QuizWrap>
        
    )
}