import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Julia Bauer</title>
        <meta name="description" content="Portfolio site for Julia Bauer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainHeading1}>Hello!</h1>
            <h1 className={styles.mainHeading}> I'm Julia Bauer.</h1>
            <p className={styles.introP}>Welcome to my website. This is a WIP. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam, a molestias incidunt doloribus.</p>
          </div>
          <img className={styles.img} src="/meMain.png" alt="Headshot" />
        </div>
        <div className={styles.section2}>
          <br />
          <br />
          <div className={styles.bgColorDiv}>
            <div className={styles.bgColorContent}>
              <br />
              <h2>About</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro animi ut, totam explicabo neque aut eligendi, odit eos sit magni? Qui tempore cum ratione doloribus quasi sequi? Unde, quos! Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, consequatur mollitia debitis dolor!</p>
              <Link href="/about">
                <img className={styles.bob} style={{ width: "120px", height: "auto", cursor: "pointer" }} src="/button.png" alt="Button image" />
              </Link>
            </div>
            <br />
          </div>
          <br />
          <div>
            <h2>My Work</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quam suscipit ipsa.</p>
            <br />
            <div className={styles.workDiv}>
              <Link href="/jou">
                <img className={`${styles.bob} ${styles.workImg}`} src="/jou.png" alt="Journalism icon" />
              </Link>
              <Link href="/design">
                <img className={`${styles.bob} ${styles.workImg}`} src="/design.png" alt="Design icon" />
              </Link>
              <Link href="/dev">
                <img className={`${styles.bob} ${styles.workImg}`} src="/dev.png" alt="Development icon" />
              </Link>
              <Link href="/fun">
                <img className={`${styles.bob} ${styles.workImg}`} src="/finalpersonallogo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <br />
          <br />
          <div className={styles.bgColorDiv}>
            <div className={styles.bgColorContent}>
              <br />
              <h2>Contact</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic iure quis repudiandae cumque non, ipsam qui illum dolore provident accusantiums.</p>
            </div>
            <br />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
