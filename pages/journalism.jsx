import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Jou.module.css";
import Link from "next/link";
import WorkSection from "../components/WorkSection/index";


export default function Journalism() {

  const works1 = [
    {
      link: "https://www.wuft.org/education/2022-11-14/antisemitism-continues-after-fl-ga-game-and-uf-students-are-uniting-against-it",
      target: "_blank",
      image: "/flgaimg.jpg",
      alt: "Students at Hillel booth",
      description: "UF Students Unite Against Antisemitism After FL-GA Game",
    },
    {
      link: "https://www.wuft.org/entertainment/2022-10-27/new-jazz-club-and-accomplished-performer-amplify-gainesville-music-scene",
      target: "_blank",
      image: "/jazzimg.jpg",
      alt: "Performers playing saxophone and EVI instruments",
      description: "Amplifying the Gainesville Music Scene",
    },
    {
      link: "https://www.youtube.com/watch?v=vCRSE-j3XrI",
      target: "_blank",
      image: "/skateimg.jpg",
      alt: "Kids sitting on skate ramp",
      description: "Local Skate Shop Helps Kids Build Confidence",
    },
    {
      link: "https://www.wuft.org/entertainment/2022-09-24/battle-of-the-bands-raises-over-25000-to-help-end-homelessness-in-gainesville",
      target: "_blank",
      image: "/bandimg.jpg",
      alt: "People clapping for a concert on stage",
      description: "Battle of the Bands Raises over $25,000 for Homelessness",
    },
  ];

  const works2 = [
    {
      link: "https://wellness360magazine.com/canine-epilepsy-how-this-disorder-can-affect-your-pet/",
      target: "_blank",
      image: "/ricoimg.jpg",
      alt: "Small Yorkie dog",
      description: "Canine Epilepsy: How This Disorder Can Affect Your Pet",
    },
    {
      link: "https://www.gigglemagazine.com/the-clt-a-new-sat-and-act-alternative/",
      target: "_blank",
      image: "/cltimg.jpg",
      alt: "Standardized test form and pencil",
      description: "The CLT: A New SAT and ACT Alternative",
    },
    {
      link: "https://wellness360magazine.com/past_issues/wellness360-may-june-2022/",
      target: "_blank",
      image: "/rockimg.jpg",
      alt: "Person climbing an orange canyon",
      description: "Scale New Heights with Rock Climbing and Bouldering",
    },
    {
      link: "https://www.gigglemagazine.com/the-new-florida-social-media-ban-bill-and-what-it-means/",
      target: "_blank",
      image: "/smbanimg.jpg",
      alt: "Children sitting at desks in a classroom",
      description: "The New Florida “Social Media Ban” Bill and What it Means",
    },
  ];

  const works3 = [
    {
      link: "https://higherlogicdownload.s3.amazonaws.com/UFAA/342da081-b4f0-488d-a6e1-44fb0861cadb/UploadedImages/FloridaGATOR/FLGAI_Spring_2023_WEB.pdf",
      target: "_blank",
      image: "/roomieimg.jpg",
      alt: "2 girl college roommates",
      description: "In Praise of Random Roomies & Real Talk with RAs",
    },
    {
      link: "https://higherlogicdownload.s3.amazonaws.com/UFAA/342da081-b4f0-488d-a6e1-44fb0861cadb/UploadedImages/FloridaGATOR/FloridaGator_Summer2022.pdf",
      target: "_blank",
      image: "/ukraineimg.jpg",
      alt: "UF Century Tower illuminated by yellow and blue lights",
      description: "Yellow and Blue Solidarity: Gators Take Action",
    },
    {
      link: "https://higherlogicdownload.s3.amazonaws.com/UFAA/342da081-b4f0-488d-a6e1-44fb0861cadb/UploadedImages/FloridaGATOR/FLGator_Mag_Fall_2023_Online.pdf",
      target: "_blank",
      image: "/movingimg.jpg",
      alt: "Dorm move-in items",
      description: "Dorm Sweet Dorm & What Moves In Must Move Out",
    },
    {
      link: "https://higherlogicdownload.s3.amazonaws.com/UFAA/342da081-b4f0-488d-a6e1-44fb0861cadb/UploadedImages/FloridaGATOR/FLGator_Mag_Fall_2023_Online.pdf",
      target: "_blank",
      image: "/scooterimg.jpg",
      alt: "Tortoise next to UF gnome statue",
      description: "The Furry, Feathery and Scaly Members of the Gator Nation",
    },
  ];

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
          <div className={styles.smallSpacer} />
          <h2>WUFT</h2>
          <p>WUFT is a PBS member and NPR-affiliated news station covering 16 counties in North Central Florida. During my time as a reporter intern – producing both print and TV news stories – I learned invaluable, transferrable journalistic skills.</p>
          <p>24-hour deadline? No problem, thanks to my experience covering event stories. Need something written concisely because of word count restrictions? Easy. And who has time for fluff in this age of shortened attention spans anyway.</p>
          <div className={styles.spacer} />
          <div>
            <WorkSection works={works1} />
          </div>
          <div className={styles.spacer} />
          <h2>Irving Publications</h2>
          <p>Explain Wellness and Giggle/Giggle Jupiter</p>
          <div className={styles.spacer} />
          <div>
            <WorkSection works={works2} />
          </div>
          <div className={styles.spacer} />
          <h2>Florida Gator Magazine</h2>
          <p>Explain FL Gator Mag and Alumni Association</p>
          <div className={styles.spacer} />
          <div>
            <WorkSection works={works3} />
          </div>
          <div className={styles.spacer} />
          <div className={styles.linkedInDiv}>
          <h2>LinkedIn</h2>
          <p>View all 100+ of my publications on LinkedIn.</p>
          <br />
          <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
            <img className={`${styles.bob} ${styles.contactBtn}`} src="/linkedinbtn.png" alt="LinkedIn button" />
          </Link>
          </div>
        </div>
        <div className={styles.smallSpacer} />
      </main>
      <Footer />
    </>
  );
}