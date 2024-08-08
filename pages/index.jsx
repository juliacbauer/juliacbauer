import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  const email = "juliabauercomm@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
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
            <div className={styles.logoDiv}>
            <h1 className={styles.mainHeading}>Julia Bauer</h1>
            <img className={styles.logo} src="/finalpersonallogo.png" alt="Logo" />
            </div>
            <p className={styles.introP}>Hello! I'm Julia Bauer – a communications professional with expertise in journalism, design and
            digital media who loves connecting with others through narratives and the arts. I'm a storyteller at heart.</p>
          </div>
          <img className={styles.img} src="/meMain.png" alt="Headshot" />
        </div>
        <div className={styles.linkedInBtnDiv}>
          <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
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
              <br />
              <h2>My Work</h2>
              <br />
              <div className={styles.workDiv}>
                <div className={styles.workCard}>
                  <Link href="/journalism">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/jou.png" alt="Journalism icon" />
                  </Link>
                  <h3 className={styles.h3}>Journalism</h3>
                  <p>Compelling, informative stories.</p>
                </div>
                <div className={styles.workCard}>
                  <Link href="/design">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/design.png" alt="Design icon" />
                  </Link>
                  <h3 className={styles.h3}>Design</h3>
                  <p>Effective, captivating designs.</p>
                </div>
                <div className={styles.workCard}>
                  <Link href="/development">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/dev.png" alt="Development icon" />
                  </Link>
                  <h3 className={styles.h3}>Development</h3>
                  <p>Responsive, UX-optimized websites.</p>
                </div>
                <div className={styles.workCard}>
                  <Link href="/fun">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/finalpersonallogo.png" alt="Logo" />
                  </Link>
                  <h3 className={styles.h3}>Just for Fun</h3>
                  <p>My artistic hobbies and passions.</p>
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
              <p>Want to stay in touch? Connect with me through LinkedIn or email.</p>
              <br />
              <div className={styles.contactDiv}>
                <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
                  <img className={`${styles.bob} ${styles.contactBtn}`} src="/linkedinbtn.png" alt="LinkedIn button" />
                </Link>
                <btn>
                  <img className={`${styles.bob} ${styles.contactBtn}`} onClick={handleEmailClick} style={{ cursor: "pointer" }} src="/emailbtn.png" alt="Email button" />
                </btn>
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
