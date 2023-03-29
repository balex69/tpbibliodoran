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
                <h1>Espace Administrateur</h1>
            </main>
        </>
    )
}