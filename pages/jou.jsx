import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Jou.module.css";
import Link from "next/link";


export default function Journalism() {
  return (
    <>
      <Head>
        <title>Journalism</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div>
            <div className={styles.logoDiv}>
              <h1 className={styles.h1}>Journalism</h1>
              <img className={styles.logo} src="/jou.png" alt="Journalism icon" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
            <br />
            <h2>WUFT</h2>
            <p>Explain WUFT</p>
            <div className={styles.workDiv}>
              <div className={styles.workCard}>
                <p>Antisemitism continues after FL-GA game, and UF students are uniting against it</p>
              </div>
              <div className={styles.workCard}>
                <p>New jazz club and accomplished performer amplify Gainesville music scene</p>
              </div>
              <div className={styles.workCard}>
                <p>Battle of the bands raises over $25,000 to help end homelessness in Gainesville</p>
              </div>
              <div className={styles.workCard}>
                <p>Local skate shop helps kids build confidence</p>
              </div>
            </div>
            <br />
            <h2>Irving Publications</h2>
            <p>Explain Wellness and Giggle/Giggle Jupiter</p>
            <div className={styles.workDiv}>
              <div className={styles.workCard}>
                <p>Scale New Heights with Rockclimbing and Bouldering</p>
              </div>
              <div className={styles.workCard}>
                <p>Canine Epilepsy: How This Disorder Can Affect Your Pet</p>
              </div>
              <div className={styles.workCard}>
                <p>The New Florida “Social Media Ban” Bill and What it Means</p>
              </div>
              <div className={styles.workCard}>
                <p>The CLT: A New SAT and ACT Alternative</p>
              </div>
            </div>
            <br />
            <h2>Florida Gator Magazine</h2>
            <p>Explain FL Gator Mag and Alumni Association</p>
            <div className={styles.workDiv}>
              <div className={styles.workCard}>
                <p>
                  In Praise of Random Roomies | Real Talk with RAs</p>
              </div>
              <div className={styles.workCard}>
                <p>Pet Portraits: Our furry, feathery and scaly members of the Gator Nation.</p>
              </div>
              <div className={styles.workCard}>
                <p>Yellow and Blue Solidarity: Events in Ukraine Spur Gators into Action</p>
              </div>
              <div className={styles.workCard}>
                <p>Dorm Sweet Dorm | What Moves In Must Move Out</p>
              </div>
            </div>
            <br />
            <h2>LinkedIn</h2>
            <p>View a full list of my publications on my LinkedIn.</p>
            <br />
            <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
              <img className={`${styles.bob} ${styles.contactBtn}`} src="/linkedinbtn.png" alt="LinkedIn button" />
            </Link>
          </div>
          <br />
        </div>
      </main>
      <Footer />
    </>
  );
}