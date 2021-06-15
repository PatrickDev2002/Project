import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <section className={utilStyles.headingMd}>
        <p>[Voila un bon petit blog]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on :{' '}
          <a href="https://nextjs.org/learn">Our next.js tutorial</a>.)
        </p>
        <p>
          If fou want to learn some piano skill, but you just have a keyboard :
          <a href="https://www.musicca.com/fr/piano">Play here.</a>
          <p>
            Even if you don't know what playing, i made this little tuto for you :
            <a href="http://localhost:3000/posts/first-post">Learn here.</a>
          </p>
          </p>
      </section>
    </Layout>
  )
}
