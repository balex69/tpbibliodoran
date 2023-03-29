import Head from "next/head";
import styles from '@/styles/Administrateur.module.scss'

export default function Administrateur() {
    return (
        <>
            <Head>
                <title>Espace Administrateur </title>
                <meta name="description" content="Accès à la bibliothèque de Doranco" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.test}>
                <form className={styles.formc}>
                    <p className={styles.p}>Espace Admin</p>
                    <input className={styles.input} type="email" placeholder="Email"/> <br/>
                    <input className={styles.input} type="password" placeholder="Mot de passe"/><br/>
                    <input className={styles.input} type="button" value="Connexion"/><br/>
                    <a className={styles.a} href="#">Mot de passe oublié</a><br/>
                </form>
            </main>
        </>
    )
}