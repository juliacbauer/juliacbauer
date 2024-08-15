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
                      src="/jouMeGraphic.webp"
                      alt="Headshot"
                      className={styles.aboutImg}
                    />
                  </div>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae. View all of my experience on my
                <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank" className={styles.linkExperience}
                >  LinkedIn.
                </Link>
              </p>
            </ScrollTriggeredSection>
            <div className={styles.smallSpacer} />
            <ScrollTriggeredSection>
              <h2>Photography</h2>
              <p>Nature shots. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
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