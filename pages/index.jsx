import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Julia Bauer</title>
        <meta name="description" content="Portfolio site for Julia Bauer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainHeading1}>Hello!</h1>
            <h1 className={styles.mainHeading}> I'm Julia Bauer.</h1>
            <p className={styles.introP}>Welcome to my website. This is a WIP. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam, a molestias incidunt doloribus.</p>
          </div>
          <img className={styles.img} src="/meMain.png" alt="Headshot" />
        </div>
        <div className={styles.linkedInBtnDiv}>
        <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="blank">
          <img className={`${styles.bob} ${styles.linkedInBtn}`} src="/linkedinbtn1.png" alt="LinkedIn button" />
        </Link>
        </div>
        <br />
        <br />
        <br />
        <div className={styles.section2}>
          <br />
          <div>
            <div className={styles.bgColorDiv}>
              <br />
              <h2>My Work</h2>
              <br />
              <div className={styles.workDiv}>
                <div className={styles.workCard}>
                  <Link href="/jou">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/jou.png" alt="Journalism icon" />
                  </Link>
                  <h3 className={styles.h3}>Journalism</h3>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className={styles.workCard}>
                  <Link href="/design">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/design.png" alt="Design icon" />
                  </Link>
                  <h3 className={styles.h3}>Design</h3>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className={styles.workCard}>
                  <Link href="/dev">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/dev.png" alt="Development icon" />
                  </Link>
                  <h3 className={styles.h3}>Development</h3>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className={styles.workCard}>
                  <Link href="/fun">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/finalpersonallogo.png" alt="Logo" />
                  </Link>
                  <h3 className={styles.h3}>Just for Fun</h3>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
              <br />
            </div>
          </div>
          <br />
          <div>
            <div className={styles.bgColorContent}>
              <br />
              <h2>Contact</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic iure quis repudiandae cumque non, ipsam qui illum dolore provident accusantiums.</p>
              <br />
              <div className={styles.contactDiv}>
                <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="blank">
                  <img className={`${styles.bob} ${styles.contactBtn}`} src="/linkedinbtn.png" alt="LinkedIn button" />
                </Link>
                <Link href="/">
                  <img className={`${styles.bob} ${styles.contactBtn}`} src="/resumebtn.png" alt="Resumé button" />
                </Link>
                <Link href="/">
                  <img className={`${styles.bob} ${styles.contactBtn}`} src="/emailbtn.png" alt="Email button" />
                </Link>
              </div>
              <br />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
