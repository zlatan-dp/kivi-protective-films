"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Protective.module.css"
import SectionTitle from "../sectionTitle/sectionTitle"
import Button from "../button/button"

gsap.registerPlugin(ScrollTrigger);

import { ProtectiveData } from "./ProtectiveData"

export default function Protective() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "+=300%",
                pin: true,
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const newIndex = Math.min(
                        ProtectiveData.length - 1,
                        Math.floor(progress * ProtectiveData.length)
                    );
                    setActiveIndex(newIndex);
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className={styles.container} style={{backgroundImage: `url(${ProtectiveData[activeIndex].bgImage})`}}>
            <SectionTitle align="center">4 Schutzschichten</SectionTitle>
            <div className={styles.infoWrap}>
                <p className={styles.subTitle}>{ProtectiveData[activeIndex].subTitle}</p>
                <p>{ProtectiveData[activeIndex].text}</p>
            </div>
            <Button href="/">JETZT SCHUTZ WÄHLEN</Button>
        </div>
    );
}


// return(
//     <div className={styles.container} >
//         <SectionTitle align='center'>4 Schutzschichten</SectionTitle>
//         <div className={styles.infoWrap}>
//             <p className={styles.subTitle}>Oleophobe<br/>Beschichtung</p>
//             <p className={styles.text}>(2 µm ± 1) – Schutz vor Fingerabdrücken & leichte Reinigung.</p>
//         </div>
//         <Button href="/">JETZT SCHUTZ WÄHLEN</Button>
//     </div>
// )