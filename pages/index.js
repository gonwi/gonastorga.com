  import Head from 'next/head'
  import styles from '../styles/Home.module.css'
  import Link from 'next/link'

  export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Gonzalo Astorga Sanchez - In Hodl I trust </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <a href="/">Gonzalo Astorga</a>
          </h1>

          <p className={styles.description}>
            In Hodl {' '}
            <code className={styles.code}>$ I trust</code>
          </p>

          <div className={styles.grid}>
            <a className={styles.card}>
              <h3>Blog &rarr;</h3>
              <p>My thoughts on crypto, machine learning and ramdon stuff.</p>
            </a>
            <Link href="/about">
            <a className={styles.card}>
              <h3>About &rarr;</h3>
              <p>Learn about the skills in my toolset!</p>
            </a>
            </Link>


            <a
              href="https://codabl.com"
              className={styles.card}
            >
              <h3>Codabl &rarr;</h3>
              <p>Codabl develops on-chain Crypto Index products.</p>
            </a>

            <a
              href="https://metadefi.com"
              className={styles.card}
            >
              <h3>MetaDefi &rarr;</h3>
              <p>
                Autonomous Stablecoin GT Index protocol and Token.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/logo.svg" alt="Codabl Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    )
  }
