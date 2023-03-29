import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bibliothèque Doranco</title>
        <meta name="description" content="Accès à la bibliothèque de Doranco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <form className={styles.formc}>
            <p className={styles.p}>Bienvenue</p>
            <input className={styles.input} type="email" placeholder="Email"/> <br/>
            <input className={styles.input} type="password" placeholder="Mot de passe"/><br/>
            <input className={styles.input} type="button" value="Connexion"/><br/>
            <a className={styles.a} href="#">Mot de passe oublié</a><br/>
            <a className={styles.a} href="/inscription">S'inscrire</a>
        </form>
      </main>
    </>
  )
}