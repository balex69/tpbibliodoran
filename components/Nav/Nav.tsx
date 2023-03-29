import styles from "./Nav.module.scss"

export default function Nav() {
    return (
        <header>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/accueil">Accueil</a></li>
                    <li><a href="/stock">Stock</a></li>
                    <li><a href="/lecteur">Lecteur</a></li>
                </ul>
                <ul>
                    <li><a href="/connexion">Connexion</a></li>
                    <li><a href="/inscription">Inscription</a></li>
                </ul>
            </nav>
        </header>

    )
}