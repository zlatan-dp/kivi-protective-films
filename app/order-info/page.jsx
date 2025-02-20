"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"

import classNames from "classnames";

import QuizWrap from "../components/QuizWrap/QuizWrap"
import CloseBtn from "../components/closeBtn/closeBtn"
import BackBtn from "../components/backBtn/backBtn";
import CountdownTimer from "../choose-film/OrderInfo/timer/Timer";
import WhiteBtn from "../components/whiteBtn/whiteBtn";


export default function OrderInformation() {
    const router = useRouter()

    const goToNextStep = () => {
        router.push("/information")     
    }

    return (
        <QuizWrap>
            <BackBtn />
            <CloseBtn />
            <h2 className={styles.title}>Bis zum Ende der Aktion:</h2>
            <CountdownTimer />
            <div className={styles.infoSection}>                
                <span className={styles.count}>×1</span>
                <span className={styles.order}>KIVI Film 32″</span>
                <div className={styles.totalWrap}>
                    <div className={styles.priceWrap}>
                        <span className={styles.priceText}>Preis</span>
                        <div>
                            <span className={styles.priceSum}>15</span>
                            <span className={styles.priceVal}>$</span>
                        </div>
                    </div>
                    <div className={styles.priceWithDiscountWrap}>
                    <span className={styles.priceTextDiscount}>Ihr Preis mit<br/> Rabatt</span>
                        <div>
                            <span className={styles.priceSumDiscount}>10</span>
                            <span className={styles.priceValDiscount}>$</span>
                        </div>
                    </div>
                </div>
            </div>
            <WhiteBtn marginTop = "20px" onClick={goToNextStep}>ZUM RABATTPREIS KAUFEN</WhiteBtn>
                <div className={styles.progressBars}>                    
                    <div className={styles.bar}></div>
                    <div className={classNames(styles.bar, styles.filled)}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
        </QuizWrap>
    )
}