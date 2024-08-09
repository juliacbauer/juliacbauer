import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Fun.module.css";
import ScrollTriggeredSection from "../components/Scroll/index";
import LazyLoadedImage from "../components/LazyLoad/index";
import LazyLoadedIcon from "../components/LazyIcon";

export default function Fun() {
  return (
    <>
      <Head>
        <title>Just for Fun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div>
            <ScrollTriggeredSection>
              <div className={styles.logoDiv}>
                <h1 className={styles.h1}>Just For Fun</h1>
                <LazyLoadedIcon className={styles.logo} src="/finalpersonallogo.png" alt="Logo" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Personal Branding</h2>
              <p>Branding process with Adobe Creative Suite</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Art</h2>
              <p>Marker, paint, pencil, pen</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Photography</h2>
              <p>Nature shots</p>
            </ScrollTriggeredSection>
          </div>
          <div className={styles.smallSpacer} />
        </div>
      </main>
      <Footer />
    </>
  );
}