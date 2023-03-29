import styles from "./Nav.module.scss"

export default function Nav() {
    return (
        <header>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/accueil"></a>Accueil</li>
                    <li><a href="/stock"></a>Stock</li>
                    <li><a href="/lecteur"></a>Lecteur</li>
                </ul>
                <ul>
                    <li><a href="/connexion">Connexion</a></li>
                    <li><a href="/inscription">Inscription</a></li>
                </ul>
            </nav>
        </header>

    )
}