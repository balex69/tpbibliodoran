import styles from "./Nav.module.scss"
import Link from "next/link";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/accueil">Accueil</Link></li>
                <li><Link href="/lecteur">Lecteur</Link></li>
                <li><Link href="/stock">Stock</Link></li>
            </ul>
            <ul>
                <li><Link href="/connexion">Connexion</Link></li>
                <li><Link href="/inscription">Inscription</Link></li>
            </ul>
        </nav>

    )
}