import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, this is my first website using next.js framework</p>
        <Link href='/posts/first-post'>
          <a> Check out my first article</a>
        </Link>
      </section>
    </Layout>
  )
}
