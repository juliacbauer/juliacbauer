import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Dev.module.css";
import Link from "next/link";
import ScrollTriggeredSection from "../components/Scroll/index";
import LazyLoadedImage from "../components/LazyLoad/index";
import LazyLoadedIcon from "../components/LazyIcon";

export default function Dev() {
  return (
    <>
      <Head>
        <title>Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div className={styles.main}>
            <ScrollTriggeredSection>
              <div className={styles.logoDiv}>
                <h1 className={styles.h1}>Development</h1>
                <LazyLoadedIcon className={styles.logo} src="/dev.png" alt="Development icon" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Cinememo</h2>
              <p>Capstone Project</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Portfolio Site</h2>
              <p>(This website!)</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Web 3 Project</h2>
            </ScrollTriggeredSection>
            <ScrollTriggeredSection>
              <p>ProsePal</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>GitHub</h2>
              <p>Feel free to view more skill-based work on my GitHub. Chronologically, my repositories illustrate my web development learning process via the Web Design and Online Communication program within the Univeristy of Florida's MA in Mass Communication degree.</p>
              <div className={styles.spacer} />
              <div className={styles.btnDiv}>
                <Link href="https://github.com/juliacbauer" target="_blank">
                  <img className={`${styles.bob} ${styles.btn}`} src="/githubbtn.png" alt="GitHub button" />
                </Link>
              </div>
            </ScrollTriggeredSection>
          </div>
          <div className={styles.smallSpacer} />
        </div>
      </main>
      <Footer />
    </>
  );
}