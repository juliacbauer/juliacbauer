import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeWork from "../components/HomeWork";
import ScrollTriggeredSection from "../components/Scroll/index";
import LazyLoadedImage from "../components/LazyLoad/index";
import LazyLoadedIcon from "../components/LazyIcon";
import LazyLoadedHome from "../components/LazyHome";

export default function Home() {

  const email = "juliabauercomm@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  };

  const works = [
    {
      link: "/journalism",
      image: "/jouicon.webp",
      alt: "Journalism icon",
      title: "Journalism",
      description: "Compelling, informative stories.",
    },
    {
      link: "/design",
      image: "/designicon.webp",
      alt: "Design icon",
      title: "Design",
      description: "Effective, captivating designs.",
    },
    {
      link: "/development",
      image: "/devicon.webp",
      alt: "Development icon",
      title: "Development",
      description: "Responsive, UX-optimized websites.",
    },
    {
      link: "/about",
      image: "/finalpersonallogo.webp",
      alt: "Logo",
      title: "About Me",
      description: "My work experience and passions.",
    },
  ];

  return (
    <>
      <Head>
        <title>Julia Bauer</title>
        <meta name="description" content="Portfolio site for Julia Bauer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconpersonal.webp" />
      </Head>
      <Header />
      <main>
        <ScrollTriggeredSection>
          <div className={`${styles.heroContainer} ${styles.fadeIn}`}>
            <div className={`${styles.heroSection} ${styles.fadeIn}`}>
              <div className={`${styles.heroContent} ${styles.fadeIn}`}>
                <div className={`${styles.logoDiv} ${styles.fadeIn}`}>
                  <h1 className={`${styles.mainHeading} ${styles.fadeIn}`}>Julia Bauer</h1>
                  <LazyLoadedIcon className={`${styles.logo} ${styles.fadeIn}`} src="/finalpersonallogo.webp" alt="Logo" width={50}
                    height={50} />
                </div>
                <p className={`${styles.introP} ${styles.fadeIn}`}>Hello! I'm Julia Bauer – a communications professional with expertise in journalism, design and
                  digital media who loves connecting with others through narratives and the arts. I'm a storyteller at heart.</p>
              </div>
              <div className={`${styles.imgContainer} ${styles.fadeIn}`}>
                <LazyLoadedHome className={`${styles.img} ${styles.fadeIn}`} src="/mainMe.webp" alt="Headshot" width={345}
                  height={345} />
              </div>
            </div>
            <div className={`${styles.linkedInBtnDiv} ${styles.fadeIn}`}>
              <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
                <LazyLoadedImage className={`${styles.bob} ${styles.linkedInBtn}`} src="/linkedinbtnmain.webp" alt="LinkedIn button" width={140}
                  height={140} />
              </Link>
            </div>
          </div>
        </ScrollTriggeredSection>
        <div className={styles.spacer} />
        <div className={`${styles.section2} ${styles.fadeIn}`}>
          <ScrollTriggeredSection>
            <div className={styles.fadeIn}>
              <div className={styles.fadeIn}>
                <div className={styles.fadeIn}>
                  <HomeWork className={styles.fadeIn} title="Explore My Work" works={works} />
                </div>
              </div>
            </div>
          </ScrollTriggeredSection>
          <div>
            <div className={styles.medSpacer} />
            <ScrollTriggeredSection>
              <div>
                <h2>Contact Me</h2>
                <div className={styles.smallerSpacer} />
                <p>Want to stay in touch? Connect with me through LinkedIn or email.</p>
                <div className={styles.smallSpacer} />
                <div className={styles.contactDiv}>
                  <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
                    <img className={`${styles.bob} ${styles.contactBtn}`} src="/linkedinbtn.webp" alt="LinkedIn button" />
                  </Link>
                  <btn>
                    <img className={`${styles.bob} ${styles.contactBtn}`} onClick={handleEmailClick} style={{ cursor: "pointer" }} src="/emailbtn.webp" alt="Email button" />
                  </btn>
                </div>
                <div className={styles.smallSpacer} />
              </div>
            </ScrollTriggeredSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
