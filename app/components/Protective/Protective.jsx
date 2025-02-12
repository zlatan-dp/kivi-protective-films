import styles from "./Protective.module.css"
import SectionTitle from "../sectionTitle/sectionTitle"
import Button from "../button/button"

export default function Protective() {
    return(
        <div className={styles.container}>
            <SectionTitle align='center'>4 Schutzschichten</SectionTitle>
            <div className={styles.infoWrap}>
                <p className={styles.subTitle}>Oleophobe<br/>Beschichtung</p>
                <p>(2 µm ± 1) – Schutz vor Fingerabdrücken & leichte Reinigung.</p>
            </div>
            <Button href="/">JETZT SCHUTZ WÄHLEN</Button>
        </div>
    )
}
