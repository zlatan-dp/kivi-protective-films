import styles from "./Explanation.module.css"
import Button from "../button/button"

export default function Explanation() {
    return (
        <div className={styles.container}>
            <Button href={'/choose-film'}>JETZT SCHUTZ WÄHLEN</Button>
            <p className={styles.text}>*Vergleich basiert auf einer Expertenbewertung der potenziellen Kosten für einen TV-Display-Austausch im Schadensfall. Tatsächliche Einsparungen können je nach Modell, Garantiebedingungen und weiteren Faktoren variieren.</p>
        </div>
    )
}