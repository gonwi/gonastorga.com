import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a software developer and entrepeneur. Working on DeFi data and analytics. </p>
        <p>
        (This is my blog where I share my thought about crypto, artificial intelligence and other software topics. You can follow me on {' '}
          <a href="https://linkedin.com/in/gonastorga">Linkedin</a>.)
        </p>
      </section>
    </Layout>
  )
}