import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Design.module.css";
import ScrollTriggeredSection from "../components/Scroll/index";
import LazyLoadedMain from "../components/LazyMain";
import LazyLoadedIcon from "../components/LazyIcon";

export default function Design() {
  return (
    <>
      <Head>
        <title>Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconpersonal.webp" />
      </Head>
      <Header />
      <ScrollTriggeredSection>
        <div className={styles.imgContainer}>
          <LazyLoadedMain src="/designbg.webp" className={styles.mainImg} alt="" />
        </div>
      </ScrollTriggeredSection>
      <main>
        <div>
          <div className={styles.main}>
            <ScrollTriggeredSection>
              <div className={styles.smallSpacer} />
              <div className={styles.logoDiv}>
                <h1 className={styles.h1}>Design</h1>
                <LazyLoadedIcon className={styles.logo} src="/designicon.webp" alt="Design icon" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Winterborn</h2>
              <p>Explain Winterborn</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Illustrator</h2>
              <p>Portiko</p>
              <p>Florida Kids Eat Well</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>InDesign</h2>
              <p>Cook book</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Photoshop</h2>
              <p>Ad campaign</p>
              <p>Email blast</p>
              <p>Alex G website</p>
            </ScrollTriggeredSection>
          </div>
        </div>
        <div className={styles.smallSpacer} />
      </main>
      <Footer />
    </>
  );
}