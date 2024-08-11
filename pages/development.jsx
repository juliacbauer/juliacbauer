import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Dev.module.css";
import Link from "next/link";
import ScrollTriggeredSection from "../components/Scroll/index";
import LazyLoadedMain from "../components/LazyMain";
import LazyLoadedIcon from "../components/LazyIcon";

export default function Dev() {
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
            <ScrollTriggeredSection>
              <div className={styles.smallSpacer} />
              <div className={styles.logoDiv}>
                <h1 className={styles.h1}>Code</h1>
                <LazyLoadedIcon className={styles.logo} src="/devicon.webp" alt="Development icon" />
              </div>
              <div className={styles.pDiv}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
              </div>
            </ScrollTriggeredSection>
            <ScrollTriggeredSection>
              <h2>Cinememo</h2>
              <div className={styles.bgDiv}>
                <div className={styles.workImgDiv}>
                  <Link href="https://cinememo.vercel.app/" target="_blank">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/cinememo.webp" alt="Cinememo web app" />
                  </Link>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cumque nulla, optio aut quod atque repellendus sunt deleniti. Voluptatem eligendi pariatur vitae obcaecati repellendus delectus aliquid vel eaque placeat nisi!</p>
                </div>
              </div>
            </ScrollTriggeredSection>
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <img className={styles.bannerImg} src="/cinememoBanner.webp" alt="Cinememo web app" />
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Prose Pal</h2>
              <div className={styles.bgDiv}>
                <div className={styles.workImgDiv}>
                  <Link href="https://prose-pal-julia-bauer.vercel.app/" target="_blank">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/prosepal.webp" alt="Prose Pal web app" />
                  </Link>
                  <p>This website! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cumque nulla, optio aut quod atque repellendus sunt deleniti. Voluptatem eligendi pariatur vitae obcaecati repellendus delectus aliquid vel eaque placeat nisi!</p>
                </div>
              </div>
            </ScrollTriggeredSection>
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <img className={styles.bannerImg} src="/prosepalBanner.webp" alt="Prose Pal web app" />
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Portfolio Site</h2>
              <div className={styles.bgDiv}>
                <div className={styles.workImgDiv}>
                  <Link href="https://github.com/juliacbauer/juliacbauer" target="_blank">
                    <img className={`${styles.bob} ${styles.workImg}`} src="/finalpersonallogo.webp" alt="Portfolio site" />
                  </Link>
                  <p>This website! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cumque nulla, optio aut quod atque repellendus sunt deleniti. Voluptatem eligendi pariatur vitae obcaecati repellendus delectus aliquid vel eaque placeat nisi!</p>
                </div>
                <div className={styles.pDiv}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, praesentium, laborum omnis velit obcaecati officiis nisi exercitationem voluptates excepturi, tempora laudantium? Optio tenetur enim porro laborum ullam fuga, natus neque!</p>
              </div>
              </div>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>GitHub</h2>
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
          <div className={styles.smallSpacer} />
        </div>
      </main>
      <Footer />
    </>
  );
}