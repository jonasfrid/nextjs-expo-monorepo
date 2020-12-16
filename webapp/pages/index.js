import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Demo from '../../shared/components/demo';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://hissmekano.com">Hissmekano!</a>
        </h1>

        <div className={styles.grid}>
          <Demo current='on the web' notCurrent='in the native app' />
        </div>
      </main>

      <footer className={styles.footer}>
        Wow!
      </footer>
    </div>
  )
}
