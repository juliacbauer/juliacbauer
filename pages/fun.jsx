import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Fun.module.css";

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
            <div className={styles.logoDiv}>
              <h1 className={styles.h1}>Just For Fun</h1>
              <img className={styles.logo} src="/finalpersonallogo.png" alt="Logo" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
            <div className={styles.smallSpacer} />
            <h2>Personal Branding</h2>
            <p>Branding process with Adobe Creative Suite</p>
            <div className={styles.smallSpacer} />
            <h2>Art</h2>
            <p>Marker, paint, pencil, pen</p>
            <div className={styles.smallSpacer} />
            <h2>Photography</h2>
            <p>Nature shots</p>
          </div>
          <div className={styles.smallSpacer} />
        </div>
      </main>
      <Footer />
    </>
  );
}