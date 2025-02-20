"use client"

import styles from "./button.module.css"

import {useRouter} from "next/navigation"

import { saveAnswer } from "../../actions/saveToStorage"

export default function Button ({ children, href }) {

    const router = useRouter()

    const goToNextStep = () => {

        saveAnswer({ step: 1, type: "transition to a quiz"})
        router.push(href)
        }

    return (
        <div className={styles.btn} onClick={goToNextStep}>{children}</div>
    )
}

