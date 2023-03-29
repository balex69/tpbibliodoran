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
            <input type="text" name="nom" placeholder="Nom" /> <br/>
            <input type="text" name="prenom" placeholder="Prénom" /> <br/>
            <input type="email" name="email" placeholder="Email" /> <br/>
            <input type="password" name="password" placeholder="Mot de passe" /><br/>
            <input type="button" value="S'inscrire" /><br/>
            <p>Déjà inscrit ? <a href="Connexion.html"> Se connecter</a></p>
        </form>
      </main>
    </>
  )
}
