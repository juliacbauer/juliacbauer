import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Design.module.css";

export default function Design() {
  return (
    <>
      <Head>
        <title>Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div>
            <div className={styles.logoDiv}>
              <h1 className={styles.h1}>Design</h1>
              <img className={styles.logo} src="/design.png" alt="Design icon" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
            <div className={styles.smallSpacer} />
            <h2>Winterborn</h2>
            <p>Explain Winterborn</p>
            <div className={styles.smallSpacer} />
            <h2>Illustrator</h2>
            <p>Portiko</p>
            <p>Florida Kids Eat Well</p>
            <div className={styles.smallSpacer} />
            <h2>InDesign</h2>
            <p>Cook book</p>
            <div className={styles.smallSpacer} />
            <h2>Photoshop</h2>
            <p>Ad campaign</p>
            <p>Email blast</p>
            <p>Alex G website</p>
          </div>
        </div>
        <div className={styles.smallSpacer} />
      </main>
      <Footer />
    </>
  );
}