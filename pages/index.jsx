import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkSection from "../components/WorkSection/index";

export default function Home() {

  const email = "juliabauercomm@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  };

  const works = [
    {
      link: "/journalism",
      image: "/jou.png",
      alt: "Journalism icon",
      title: "Journalism",
      description: "Compelling, informative stories.",
    },
    {
      link: "/design",
      image: "/design.png",
      alt: "Design icon",
      title: "Design",
      description: "Effective, captivating designs.",
    },
    {
      link: "/development",
      image: "/dev.png",
      alt: "Development icon",
      title: "Development",
      description: "Responsive, UX-optimized websites.",
    },
    {
      link: "/fun",
      image: "/finalpersonallogo.png",
      alt: "Logo",
      title: "Just for Fun",
      description: "My artistic hobbies and passions.",
    },
  ];

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
        <div className={styles.spacer} />
        <div className={styles.section2}>
          <div>
            <div>
              <WorkSection title="Explore My Work" works={works} />
            </div>
          </div>
          <div>
          <div className={styles.medSpacer} />
            <div>
              <h2>Contact Me</h2>
              <div className={styles.smallerSpacer} />
              <p>Want to stay in touch? Connect with me through LinkedIn or email.</p>
              <div className={styles.smallSpacer} />
              <div className={styles.contactDiv}>
                <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
                  <img className={`${styles.bob} ${styles.contactBtn}`} src="/linkedinbtn.png" alt="LinkedIn button" />
                </Link>
                <btn>
                  <img className={`${styles.bob} ${styles.contactBtn}`} onClick={handleEmailClick} style={{ cursor: "pointer" }} src="/emailbtn.png" alt="Email button" />
                </btn>
              </div>
              <div className={styles.smallSpacer} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
