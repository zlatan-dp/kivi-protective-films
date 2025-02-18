import styles from './OrderInfo.module.css'

export default function OrderInfo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.diagonalWrap}></div>
            <div className={styles.xIcon}></div>
            <div className={styles.countWrap}></div>
        </div>
    )
}