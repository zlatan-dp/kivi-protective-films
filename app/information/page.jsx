"use client"

import styles from "./page.module.css";

import {useRouter} from "next/navigation"
import { useState } from "react";

import { saveAnswer } from "../actions/saveToStorage";

import classNames from "classnames";

import QuizWrap from "../components/QuizWrap/QuizWrap"
import CloseBtn from "../components/closeBtn/closeBtn"
import BackBtn from "../components/backBtn/backBtn";
import WhiteBtn from "../components/whiteBtn/whiteBtn";


export default function Information () {

    const router = useRouter()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Bitte geben Sie Ihren Namen ein";
        }

        if (!email.trim()) {
            newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Ungültige E-Mail-Adresse";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const goToNextStep = (e) => {
        e.preventDefault();
        if (validateForm()) {
            saveAnswer({ step: 4, type: "info about client", answer: {Name: name, Email: email}, question: "select name, email" })
            router.push("/ups-page");
        }   
    }
    return (
                <QuizWrap>
                    <BackBtn step = {4}/>
                    <CloseBtn step = {4}/>
                    <h2 className={styles.title}>Ihre Daten</h2>
                    <div className={styles.imageWrap}></div>
                    <form onSubmit={goToNextStep} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                placeholder="Name"
                                className={classNames(styles.input, { [styles.error]: errors.name })}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                        </div>

                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                placeholder="E-Mail"
                                className={classNames(styles.input, { [styles.error]: errors.email })}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                        </div>

                        <WhiteBtn marginTop="0px" onClick={goToNextStep}>BESTELLEN UND BEZAHLEN</WhiteBtn>
                    </form>
                   
                    <div className={styles.progressBars}>                    
                        <div className={styles.bar}></div>                        
                        <div className={styles.bar}></div>
                        <div className={classNames(styles.bar, styles.filled)}></div>
                        <div className={styles.bar}></div>
                    </div>
                </QuizWrap>
    )
}