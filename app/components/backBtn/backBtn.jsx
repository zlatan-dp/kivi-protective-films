"use client"

import styles from './backBtn.module.css'

import {useRouter} from "next/navigation"

export default function BackBtn() {

    const router = useRouter()

    const goToPreviosStep = () => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
      };

    return (
        <div className={styles.closeBtn} onClick={goToPreviosStep}/>
    )
}