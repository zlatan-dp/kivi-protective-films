import styles from "./Advantage.module.css"
import SectionTitle from "../sectionTitle/sectionTitle"
import Button from "../button/button"

export default function AdvantageSection ({title, bgImage}) {
    return (
        <div className={styles.container} style={{backgroundImage: `url(${bgImage})`}}>
            <SectionTitle align={'left'}>{title}</SectionTitle>
            <Button href={'/'}>SCHÜTZE DEINEN TV!</Button>
        </div>
    )
}