import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

function Home (props) {
  return(
    <div className={styles["main-container"]}>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="img/png" href="/favicon.png" />
      </Head>
    <div className={styles["body-container"]}>
      <div className={styles["home-heading"]}>
        <p className={styles["welcome-line"]}>Welcome!</p>
        <p className={styles["home-sub-heading"]}>We have written blogs on some Iconic Stadiums in European Football</p>
      </div>
      <div className={styles["blogs-card-container"]}>
        <Link href={`/blt93ebf1afbc317a08`}>
          <a>
            <div className={styles["blog-card-container"]}>
              <div className={styles["company-image-container"]}>
                <Image
                  src={`/logo.png`}
                  width="80%"
                  height="100%"
                  className={styles["company-image"]}
                >
                </Image>
              </div>
              <div className={styles["blogs-title"]}>
                <span>Blogs Page</span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Home;