"use client"

import styles from './closeBtn.module.css'

import { saveAnswer } from '../../actions/saveToStorage'

import {useRouter} from "next/navigation"

export default function CloseBtn({step}) {

    const router = useRouter()

    const goToNextStep = () => {
        saveAnswer({ step: step, type: "exit"})
        router.push("/why-cancel")    
    }

    return (
        <div className={styles.closeBtn} onClick={goToNextStep}/>
    )
}