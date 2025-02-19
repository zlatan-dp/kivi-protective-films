"use client"

import styles from './closeBtn.module.css'

import {useRouter} from "next/navigation"

export default function CloseBtn() {

    const router = useRouter()

    const goToNextStep = () => {
        router.push("/")    
    }

    return (
        <div className={styles.closeBtn} onClick={goToNextStep}/>
    )
}