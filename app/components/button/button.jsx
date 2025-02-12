import Link from "next/link"
import styles from "./button.module.css"

export default function Button ({ children, href }) {
    return (
        <Link href={href} className={styles.btn}>{children}</Link>
    )
}