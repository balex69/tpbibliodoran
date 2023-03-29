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
<<<<<<< HEAD
        <form>
            <p>Accueil</p>
            <input type="email" placeholder="Email"/> <br/>
            <input type="password" placeholder="Mot de passe"/><br/>
            <input type="button" value="Connexion"/><br/>
            <a href="#">Mot de passe oublié</a><br/>
            <a href="#">S'inscrire</a>
        </form>
=======
          <h1>Titre</h1>
>>>>>>> a6aaacbb714d606a7d06d99af1ef7673ddf8f118
      </main>
    </>
  )
}