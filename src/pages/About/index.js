import CustomHead from '../../components/CustomHead'
import Header from '../../components/Header'
import styles from './About.module.scss'

function About() {
  return (
    <div className={styles.container}>
      <CustomHead title="About page" linkRel="icon" linkPah="/favicon.ico" content="About page"/>

      <main className={styles.main}>
        <Header title="Welcome to About Page" />
        <p className={styles.description}>
        </p>
        <p className={styles.title}>
          Move to <a href="/"> Home Page</a>
        </p>
       </main>
    </div>
  )
}

export default About;