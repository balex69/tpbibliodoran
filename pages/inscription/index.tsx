import Head from 'next/head'
import styles from '@/styles/Auth.module.scss'

export default function Inscription() {
  return (
    <>
      <Head>
        <title>Bibliothèque Doranco</title>
        <meta name="description" content="Accès à la bibliothèque de Doranco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
      <form className={styles.form}>
            <p className={styles.p}>S'inscrire</p>
            <input className={styles.input} type="text" name="nom" placeholder="Nom" /> <br/>
            <input className={styles.input} type="text" name="prenom" placeholder="Prénom" /> <br/>
            <input className={styles.input} type="email" name="email" placeholder="Email" /> <br/>
            <input className={styles.input} type="password" name="password" placeholder="Mot de passe" /><br/>
            <input className={styles.input} type="button" value="S'inscrire" /><br/>
            <p className={styles.p}>Déjà inscrit ? <a className={styles.a} href="/connexion"> Se connecter</a></p>
        </form>
      </main>
    </>
  )
}
