import Link from "next/link";
import styles from './RedirectButton.module.scss'


export default function RedirectButton({ path, name }) {
    return (
        <button className={styles.button}>
            <Link href={path}>
                {name} <span className={styles.arrow}>→</span>
            </Link>
        </button>
    )
}