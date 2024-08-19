import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Dev.module.css";
import Link from "next/link";
import ScrollTriggeredSection from "../components/Scroll/index";
import LazyLoadedMain from "../components/LazyMain";
import WorkSection from "../components/WorkSection/index";


export default function Dev() {

  const works1 = [
    {
      link: "/portfolio",
      image: "/portfolio.webp",
      alt: "Image of portfolio homepage",
      description: "Portfolio Website",
    },
    {
      link: "/cinememo",
      image: "/cinememo.webp",
      alt: "Image of Cinememo homepage",
      description: "Cinememo: Movie-Tracking App",
    },
    {
      link: "/prosepal",
      image: "/prosepal.webp",
      alt: "Image of Prose Pal search page",
      description: "Prose Pal: Vocabulary-Tracking App",
    },
    {
      link: "/keepitreel",
      image: "/keepitreel.webp",
      alt: "Image of movie searching app homepage",
      description: "Keep It Reel: Movie-Searching App",
    },
  ];

  return (
    <>
      <Head>
        <title>Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconpersonal.webp" />
      </Head>
      <Header />
      <ScrollTriggeredSection>
        <div className={styles.imgContainer}>
          <LazyLoadedMain src="/devbg.webp" className={styles.mainImg} alt="" />
        </div>
      </ScrollTriggeredSection>
      <main>
        <div>
          <div className={styles.main}>
            <div className={styles.spacer} />
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <div className={styles.pDiv}>
                <p>Through my web development courses, I have learned the importance of building responsive, functional and visually appealing websites that optimize user experience and are accessible to all.</p>
              </div>
              <div className={styles.pDiv}>
                <p>My skills in HTML and CSS allow me to effectively structure and style content while my experience with React and Next.js allows me to build interactive and dynamic web applications. For anything web-related, I prioritize UX/UI design by approaching projects with a user mindset. This allows me to create intuitive and engaging interfaces that all users can navigate.</p>
              </div>
            </ScrollTriggeredSection>
            <section id="apps">
              <div className={styles.spacer} />
              <div className={styles.spacer} />
              <ScrollTriggeredSection>
                <WorkSection works={works1} />
              </ScrollTriggeredSection>
            </section>
            <div className={styles.spacer} />
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <h2>See More</h2>
              <div className={styles.pDiv}>
                <p>Feel free to view more skill-based work on my GitHub. Chronologically, my repositories illustrate my web development learning process via the Web Design and Online Communication program within the Univeristy of Florida's MA in Mass Communication degree.</p>
              </div>
              <div className={styles.spacer} />
              <div className={styles.btnDiv}>
                <Link href="https://github.com/juliacbauer" target="_blank">
                  <img className={`${styles.bob} ${styles.btn}`} src="/githubbtn.webp" alt="GitHub button" />
                </Link>
              </div>
            </ScrollTriggeredSection>
          </div>
          <div className={styles.spacer} />
        </div>
      </main>
      <Footer />
    </>
  );
}