import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import RedirectButton from "@/components/RedirectButton/RedirectButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bibliothèque Doranco</title>
        <meta name="description" content="Accès à la bibliothèque de Doranco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
          <h1>Bienvenue sur la Bibliothèque de Doranco</h1>
          <div className={styles.actionContainer}>
              <RedirectButton name="Voir les livres" path="/lecteur"/>
              <RedirectButton name="Voir les emprunts en cours" path="/stock"/>
          </div>
      </main>
    </>
  )
}
