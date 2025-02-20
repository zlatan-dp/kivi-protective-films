"use client"

import styles from "./button.module.css"

import {useRouter} from "next/navigation"

export default function Button ({ children, href }) {

    const router = useRouter()

    const goToNextStep = () => {
        router.push(href)
        }

    return (
        <div className={styles.btn} onClick={goToNextStep}>{children}</div>
    )
}

