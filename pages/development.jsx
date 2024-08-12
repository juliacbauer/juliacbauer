import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Dev.module.css";
import Link from "next/link";
import ScrollTriggeredSection from "../components/Scroll/index";
import LazyLoadedMain from "../components/LazyMain";
import LazyLoadedIcon from "../components/LazyIcon";
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
              </div>
              <div className={styles.pDiv}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam molestiae fugit fuga at. Ab unde ut, ducimus provident culpa enim ipsam facere explicabo officia mollitia fugiat, maxime error sequi!</p>
              </div>
              <div className={styles.pDiv}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam molestiae fugit fuga at. Ab unde ut, ducimus provident culpa enim ipsam facere explicabo officia mollitia fugiat, maxime error sequi!</p>
              </div>
            </ScrollTriggeredSection>
            <div className={styles.spacer} />
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <WorkSection works={works1} />
            </ScrollTriggeredSection>
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