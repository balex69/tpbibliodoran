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
        <h1>Titre</h1>
      </main>
    </>
  )
}
