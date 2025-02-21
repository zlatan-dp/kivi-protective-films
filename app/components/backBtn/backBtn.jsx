"use client"

import styles from './backBtn.module.css'

import { saveAnswer } from '../../actions/saveToStorage'

import {useRouter} from "next/navigation"

export default function BackBtn({step}) {

    const router = useRouter()

    const goToPreviosStep = () => {
        if (window.history.length > 1) {
          saveAnswer({ step: step, type: "back step"})
          router.back();
        } else {
          saveAnswer({ step: 1, type: "back to main page"})
          router.push("/");
        }
      };

    return (
        <div className={styles.closeBtn} onClick={goToPreviosStep}/>
    )
}