import Head from 'next/head'
import styles from '@/styles/Inscription.module.scss'

export default function Inscription() {
  return (
    <>
      <Head>
        <title>Bibliothèque Doranco</title>
        <meta name="description" content="Accès à la bibliothèque de Doranco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <form>
            <p>S'inscrire</p>
            <input type="email" placeholder="Email"/> <br/>
            <input type="password" placeholder="Mot de passe"/><br/>
            <input type="button" value="Connexion"/><br/>
            <a href="#">Connexion</a><br/>
        </form>
      </main>
    </>
  )
}