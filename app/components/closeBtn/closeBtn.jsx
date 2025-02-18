import Link from "next/link"

import styles from './closeBtn.module.css'

export default function CloseBtn() {
    return (
        <Link href="/" className={styles.closeBtn}/>
    )
}