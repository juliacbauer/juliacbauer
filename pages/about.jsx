import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";
import Link from "next/link";
import ScrollTriggeredSection from "../components/Scroll/index";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div>
            <div>
              <ScrollTriggeredSection>
                <div className={styles.logoDiv}>
                  <h1 className={styles.headings}>About Me</h1>
                  <img className={styles.logo} src="/finalpersonallogo.png" alt="Logo" />
                </div>
                <div className={styles.aboutDiv}>
                  <img className={styles.aboutImg} src="/jouMeGraphic.png" alt="Headshot" />
                  <p className={styles.aboutP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam.</p>
                </div>
              </ScrollTriggeredSection>
            </div>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Experience</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae.</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Education</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae.</p>
            </ScrollTriggeredSection>
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <div className={styles.btnDiv}>
                <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
                  <img className={`${styles.bob} ${styles.linkedInBtn}`} src="/linkedinbtn.png" alt="LinkedIn button" />
                </Link>
              </div>
            </ScrollTriggeredSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}