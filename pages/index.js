import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home( {allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date}/>
            </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}