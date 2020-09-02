import CustomHead from '../components/CustomHead'
import Header from '../components/Header'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead title="home page" linkRel="icon" linkPah="/favicon.ico" content="home page"/>

      <main className={styles.main}>
        <Header title="Welcome to HomePage" />

        <p className={styles.title}>
          Move to <a href="/About"> About Page</a>
        </p>

        </main>

    </div>
  )
}
