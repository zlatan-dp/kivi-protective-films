import styles from './OrderInfo.module.css'

export default function OrderInfo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.diagonalWrap}>
                <span className={styles.diagonalText}>32</span>
                <span className={styles.diagonalText}>"</span>
                <span className={styles.arrow}></span>
            </div>
            <div className={styles.xIcon}></div>
            <div className={styles.countWrap}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.25" d="M17.5 12L6.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className={styles.countText}>1</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.plus}>
                <path d="M12 6.5V17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M17.5 12L6.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            </div>
        </div>
    )
}