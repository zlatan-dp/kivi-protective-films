import styles from "./transparentBtn.module.css"

export default function TranspBtn ({ children, marginTop }) {
    return (
        <div className={styles.btn} style={ { marginTop: marginTop} }>{children}</div>
    )
}
