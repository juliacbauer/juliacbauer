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
      image: "/flga.png",
      alt: "Students at Hillel booth",
      description: "UF Students Unite Against Antisemitism After FL-GA Game",
    },
    {
      link: "https://www.wuft.org/entertainment/2022-10-27/new-jazz-club-and-accomplished-performer-amplify-gainesville-music-scene",
      target: "_blank",
      image: "/jazz.png",
      alt: "Performers playing saxophone and EVI instruments",
      description: "Amplifying the Gainesville Music Scene",
    },
    {
      link: "https://www.youtube.com/watch?v=vCRSE-j3XrI",
      target: "_blank",
      image: "/skate.png",
      alt: "Kids sitting on skate ramp",
      description: "Local Skate Shop Helps Kids Build Confidence",
    },
    {
      link: "https://www.wuft.org/entertainment/2022-09-24/battle-of-the-bands-raises-over-25000-to-help-end-homelessness-in-gainesville",
      target: "_blank",
      image: "/band.png",
      alt: "People clapping for a concert on stage",
      description: "Battle of the Bands Raises over $25,000 for Homelessness",
    },
  ];

  const works2 = [
    {
      link: "https://wellness360magazine.com/canine-epilepsy-how-this-disorder-can-affect-your-pet/",
      target: "_blank",
      image: "/rico.png",
      alt: "Small Yorkie dog",
      description: "Canine Epilepsy: How This Disorder Can Affect Your Pet",
    },
    {
      link: "https://www.gigglemagazine.com/the-clt-a-new-sat-and-act-alternative/",
      target: "_blank",
      image: "/clt.png",
      alt: "Standardized test form and pencil",
      description: "The CLT: A New SAT and ACT Alternative",
    },
    {
      link: "https://wellness360magazine.com/past_issues/wellness360-may-june-2022/",
      target: "_blank",
      image: "/rock.png",
      alt: "Person climbing an orange canyon",
      description: "Scale New Heights with Rock Climbing and Bouldering",
    },
    {
      link: "https://www.gigglemagazine.com/the-new-florida-social-media-ban-bill-and-what-it-means/",
      target: "_blank",
      image: "/smban.png",
      alt: "Children sitting at desks in a classroom",
      description: "The New Florida “Social Media Ban” Bill and What it Means",
    },
  ];

  const works3 = [
    {
      link: "https://higherlogicdownload.s3.amazonaws.com/UFAA/342da081-b4f0-488d-a6e1-44fb0861cadb/UploadedImages/FloridaGATOR/FLGAI_Spring_2023_WEB.pdf",
      target: "_blank",
      image: "/roomies.png",
      alt: "2 girl college roommates",
      description: "In Praise of Random Roomies & Real Talk with RAs",
    },
    {
      link: "https://higherlogicdownload.s3.amazonaws.com/UFAA/342da081-b4f0-488d-a6e1-44fb0861cadb/UploadedImages/FloridaGATOR/FloridaGator_Summer2022.pdf",
      target: "_blank",
      image: "/ukraine.png",
      alt: "UF Century Tower illuminated by yellow and blue lights",
      description: "Yellow and Blue Solidarity: Gators Take Action",
    },
    {
      link: "https://higherlogicdownload.s3.amazonaws.com/UFAA/342da081-b4f0-488d-a6e1-44fb0861cadb/UploadedImages/FloridaGATOR/FLGator_Mag_Fall_2023_Online.pdf",
      target: "_blank",
      image: "/moving.png",
      alt: "Dorm move-in items",
      description: "Dorm Sweet Dorm & What Moves In Must Move Out",
    },
    {
      link: "https://higherlogicdownload.s3.amazonaws.com/UFAA/342da081-b4f0-488d-a6e1-44fb0861cadb/UploadedImages/FloridaGATOR/FLGator_Mag_Fall_2023_Online.pdf",
      target: "_blank",
      image: "/scooter.png",
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
            <p>Grammar and other technical skills aside, journalism is all about storytelling. Everyone has a story to tell, and journalists play a crucial role in bringing those stories to light.</p>
            <p>However, a good journalist rarely has a full story in mind. Instead, they let the narrative reveal itself, prioritizing human connection and using their words to bridge the gap between one person and an entire audience. My work history has given me the opportunity to do just that.</p>
          </div>
          <div className={styles.pBreakDiv}>
          <img className={styles.pBreak} src="/pBreak.png" alt="Break in section icon"/>
          </div>
          <h2>WUFT</h2>
          <p>WUFT is a PBS member news station covering 16 counties in North Central Florida. As a reporter intern, I produced hard news stories in a multimedia format.</p>
          <p>24-hour deadline? No problem, thanks to my experience covering event stories. Need something written concisely because of word count restrictions? Easy. And in this age of shortened attention spans, there's no time for fluff anyway.</p>
          <div className={styles.spacer} />
          <div>
            <WorkSection title="Highlights" works={works1} />
          </div>
          <div className={styles.spacer} />
          <h2>Irving Publications</h2>
          <p>Established in 2009, Irving Publications, LLC produces two bimonthly award-winning publications: Giggle Magazine, the No. 1 parenting resource in Gainesville, and Wellness360 Magazine, a health and wellness publication and has recently expanded to include Giggle Magazine Jupiter.</p>
          <p>I started as an editorial intern in January 2022, writing print stories for Giggle and Wellness360 and managing the print event calendars. I loved writing about anything from school district accomplishments to fitness, so much so that I continued interning through summer 2023.</p>
          <p>Beginning that fall, my role grew into writer and web editor. I manage the WordPress websites for all three publications, including their web analytics, print and online calendars and email marketing while writing, assigning and editing stories for print and SEO optimization.</p>
          <div className={styles.spacer} />
          <div>
            <WorkSection title="Highlights" works={works2} />
          </div>
          <div className={styles.spacer} />
          <h2>UF Alumni Association</h2>
          <p>At the UF Alumni Association, I was a strategic communications intern for Florida Gator Magazine, the quarterly print publication uniting the worldwide network of Gator alumni.</p>
          <p>I had the opportunity to tell the stories of extraordinary UF graduates, inspiring other Gators and nourishing a global sense of community. I was also fortunate enough to share my own story through this publication. This personal piece – about a random roommate turned best friend of five years – was published upon the completion of my undergraduate degree.</p>
          <div className={styles.spacer} />
          <div>
            <WorkSection title="Highlights" works={works3} />
          </div>
          <div className={styles.spacer} />
          <div className={styles.linkedInDiv}>
            <h2>See More</h2>
            <p>Read all 100+ of my publications on LinkedIn.</p>
            <br />
            <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
              <img className={`${styles.bob} ${styles.contactBtn}`} src="/linkedinbtn.png" alt="LinkedIn button" />
            </Link>
          </div>
        </div>
        <div className={styles.spacer} />
      </main>
      <Footer />
    </>
  );
}