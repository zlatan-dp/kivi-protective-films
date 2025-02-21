import styles from "./Explanation.module.css"
import Button from "../button/button"

import Link from "next/link";

export default function Explanation() {
    return (
        <div className={styles.container}>
            <Button href={'/choose-film'}>JETZT SCHUTZ WÄHLEN</Button>
            <p className={styles.text}>*Vergleich basiert auf einer Expertenbewertung der potenziellen Kosten für einen TV-Display-Austausch im Schadensfall. Tatsächliche Einsparungen können je nach Modell, Garantiebedingungen und weiteren Faktoren variieren.</p>
            <div className={styles.linksWrap}>
                <Link href={'/privacy-statement'} className={styles.links}>Datenschutzerklärung</Link>
                <Link href={'/cookie-files-policy'} className={styles.links}>Verwendung von Cookies</Link>
                <Link href={'/terms-of-use'} className={styles.links}>Nutzungsbedingungen</Link>
            </div>
        </div>
    )
}