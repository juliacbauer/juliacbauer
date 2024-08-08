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
        <div className={styles.main}>
          <div className={styles.logoDiv}>
            <h1 className={styles.h1}>Journalism</h1>
            <img className={styles.logo} src="/jou.png" alt="Journalism icon" />
          </div>
          <div>
            <p>AP style, storytelling, interviewing, multimedia</p>
          </div>
          <br />
          <h2>WUFT</h2>
          <p>WUFT is a PBS member and NPR-affiliated news station covering 16 counties in North Central Florida. During my time as a reporter intern – producing both print and TV news stories – I learned invaluable, transferrable journalistic skills.</p>
          <p>24-hour deadline? No problem thanks to my experience covering event stories. Need something written conscisely because of word count restrictions? Easy. And who has time for fluff in this age of shortened attention spans anyway.</p>
          <br />
          <div>
            <div>
              <p>New jazz club and accomplished performer amplify Gainesville music scene</p>
            </div>
            <div>
              <p>Antisemitism continues after FL-GA game, and UF students are uniting against it</p>
            </div>
            <div >
              <p>Battle of the bands raises over $25,000 to help end homelessness in Gainesville</p>
            </div>
            <div >
              <p>Local skate shop helps kids build confidence</p>
            </div>
          </div>
          <br />
          <h2>Irving Publications</h2>
          <p>Explain Wellness and Giggle/Giggle Jupiter</p>
          <br />
          <div>
            <div>
              <p>Scale New Heights with Rockclimbing and Bouldering</p>
            </div>
            <div >
              <p>Canine Epilepsy: How This Disorder Can Affect Your Pet</p>
            </div>
            <div >
              <p>The New Florida “Social Media Ban” Bill and What it Means</p>
            </div>
            <div>
              <p>The CLT: A New SAT and ACT Alternative</p>
            </div>
          </div>
          <br />
          <h2>Florida Gator Magazine</h2>
          <p>Explain FL Gator Mag and Alumni Association</p>
          <br />
          <div>
            <div>
              <p>
                In Praise of Random Roomies | Real Talk with RAs</p>
            </div>
            <div >
              <p>Pet Portraits: Our furry, feathery and scaly members of the Gator Nation.</p>
            </div>
            <div >
              <p>Yellow and Blue Solidarity: Events in Ukraine Spur Gators into Action</p>
            </div>
            <div >
              <p>Dorm Sweet Dorm | What Moves In Must Move Out</p>
            </div>
          </div>
          <br />
          <h2>LinkedIn</h2>
          <p>View all 100+ of my publications on LinkedIn.</p>
          <br />
          <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
            <img className={`${styles.bob} ${styles.contactBtn}`} src="/linkedinbtn.png" alt="LinkedIn button" />
          </Link>
        </div>
        <br />
      </main>
      <Footer />
    </>
  );
}