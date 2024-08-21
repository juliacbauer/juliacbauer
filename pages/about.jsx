import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";
import Link from "next/link";
import ScrollTriggeredSection from "../components/Scroll/index";
import LazyLoadedHome from "../components/LazyHome/index";
import LazyLoadedIcon from "../components/LazyIcon";
import PersonalSection from "../components/PersonalSection/index";

export default function About() {
  const works = [
    {
      image: "/moonocean.webp",
      alt: "Image of Winterborn homepage",
    },
    {
      image: "/butterfly.webp",
      alt: "Image of cookbook cover design",
    },
    {
      image: "/bee.webp",
      alt: "Image of FL Kids Eat Well logo",
    },
    {
      image: "/turtle.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/bike.webp",
      alt: "Image of Portiko logo",
    },
    {
      image: "/bubble.webp",
      alt: "Image of pet adoption email blast",
    },
    {
      image: "/caterpillar.webp",
      alt: "Image of Alex G website redesign homepage",
    },
    {
      image: "/fish.webp",
      alt: "Image of travel ad campaign design",
    },
    {
      image: "/flowerbush.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/gators.webp",
      alt: "Image of Winterborn homepage",
    },
    {
      image: "/flowers.webp",
      alt: "Image of FL Kids Eat Well logo",
    },
    {
      image: "/jazzclub.webp",
      alt: "Image of Portiko logo",
    },
    {
      image: "/light.webp",
      alt: "Image of pet adoption email blast",
    },
    {
      image: "/lightbeams.webp",
      alt: "Image of cookbook cover design",
    },
    {
      image: "/lighthouse.webp",
      alt: "Image of Alex G website redesign homepage",
    },
    {
      image: "/moon.webp",
      alt: "Image of travel ad campaign design",
    },
    {
      image: "/ncbutterfly.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/oceansunset.webp",
      alt: "Image of Alex G website redesign homepage",
    },
    {
      image: "/oceancliff.webp",
      alt: "Image of pet adoption email blast",
    },
    {
      image: "/paris.webp",
      alt: "Image of cookbook cover design",
    },
    {
      image: "/pinkflowers.webp",
      alt: "Image of travel ad campaign design",
    },
    {
      image: "/plane.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/rainbow.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/pinksky.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/raincloud.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/redflowers.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/river.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/roadsunset.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/snorkel.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/tree.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/waterfall.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/wave.webp",
      alt: "Image of personal branding elements",
    },
  ];
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconpersonal.webp" />
      </Head>
      <Header />
      <main>
        <div>
          <div className={styles.main}>
            <div>
              <ScrollTriggeredSection>
                <div className={styles.logoDiv}>
                  <h1 className={styles.headings}>About Me</h1>
                  <LazyLoadedIcon className={styles.logo} src="/finalpersonallogo.webp" alt="Logo" />
                </div>
                <div className={styles.aboutDiv}>
                  <div className={styles.imgContainer}>
                    <LazyLoadedHome
                      src="/aboutMe.webp"
                      alt="Headshot"
                      className={styles.aboutImg}
                    />
                  </div>
                  <p className={styles.aboutP}>I am a communications professional with a passion for storytelling and visual communication. I have always loved visual arts; I was a dancer from age two to 18 and love to draw in my freetime. My lifelong passion for visual art only grew during my time in college. As a journalist, I am a strong writer and multimedia reporter who can tell compelling stories across platforms. As a digital designer with programming skills, I take pride in creating aesthetic and engaging digital media that optimizes user experience. Regardless of the communication channel, my ultimate goal is to tell meaningful and impactful stories that resonate with and connect audiences.</p>
                </div>
              </ScrollTriggeredSection>
            </div>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Experience</h2>
              <p>Irving Publications (Wellness360 Magazine, Giggle Magazine, Giggle Magazine Jupiter) | Editorial Intern, Web Editor | January 2022 – Present</p>
              <p>University of Florida Alumni Association | Strategic Communications Intern | January 2023 – May 2023</p>
              <p>Winterborn, LLC | Freelance Web Designer | December 2022 – January 2023</p>
              <p>WUFT News | Reporter Intern | August 2022 – December 2022</p>
              <p>WUFT News | Contributing Television News Reporter | April 2022</p>
              <p>The Gainesville Sun | Contributing Writer | October 2021</p>
              <p>The Independent Florida Alligator | Contributing Writer |  Decemeber 2020</p>
              <p className={styles.linkExperience}>
                <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank" className={styles.linkExperience}
                >View more on my LinkedIn.
                </Link>
              </p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Education</h2>
              <p>MA in Mass Communication, concentration in Web Design & Online Communication | UF | August 2022 – August 2024</p>
              <p>BS in Journalism, minor in Communication Studies | UF | August 2019 – May 2023</p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Just for Fun</h2>
              <p>I love capturing the world's small, beautiful moments, which is why I have always been passionate about photography. Although I don't own a professional camera, my iPhone still allows me to capture moments that may otherwise go unnoticed. The gallery below is full of my favorite shots – one-of-a-kind images taken from the tops of mountains to right in my own backyard.</p>
              <div className={styles.smallSpacer} />
              <ScrollTriggeredSection>
                <PersonalSection works={works} />
              </ScrollTriggeredSection>
            </ScrollTriggeredSection>
          </div>
        </div>
        <div className={styles.smallSpacer} />
      </main>
      <Footer />
    </>
  );
}