import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Fun.module.css";
import ScrollTriggeredSection from "../components/Scroll/index";
import LazyLoadedMain from "../components/LazyMain";
import PersonalSection from "../components/PersonalSection/index";

export default function Fun() {
  const works1 = [
    {
      image: "/winterborn.webp",
      alt: "Image of Winterborn homepage",
    },
    {
      image: "/flkids.webp",
      alt: "Image of FL Kids Eat Well logo",
    },
    {
      image: "/portiko.webp",
      alt: "Image of Portiko logo",
    },
    {
      image: "/emailblast.gif",
      alt: "Image of pet adoption email blast",
    },
    {
      image: "/indesign.webp",
      alt: "Image of cookbook cover design",
    },
    {
      image: "/alexg.gif",
      alt: "Image of Alex G website redesign homepage",
    },
    {
      image: "/adcampaign.webp",
      alt: "Image of travel ad campaign design",
    },
    {
      image: "/personaldesign.webp",
      alt: "Image of personal branding elements",
    },
  ];

  const works2 = [
    {
      image: "/winterborn.webp",
      alt: "Image of Winterborn homepage",
    },
    {
      image: "/flkids.webp",
      alt: "Image of FL Kids Eat Well logo",
    },
    {
      image: "/portiko.webp",
      alt: "Image of Portiko logo",
    },
    {
      image: "/emailblast.gif",
      alt: "Image of pet adoption email blast",
    },
    {
      image: "/indesign.webp",
      alt: "Image of cookbook cover design",
    },
    {
      image: "/alexg.gif",
      alt: "Image of Alex G website redesign homepage",
    },
    {
      image: "/adcampaign.webp",
      alt: "Image of travel ad campaign design",
    },
    {
      image: "/personaldesign.webp",
      alt: "Image of personal branding elements",
    },
    {
      image: "/winterborn.webp",
      alt: "Image of Winterborn homepage",
    },
    {
      image: "/flkids.webp",
      alt: "Image of FL Kids Eat Well logo",
    },
    {
      image: "/portiko.webp",
      alt: "Image of Portiko logo",
    },
    {
      image: "/emailblast.gif",
      alt: "Image of pet adoption email blast",
    },
    {
      image: "/indesign.webp",
      alt: "Image of cookbook cover design",
    },
    {
      image: "/alexg.gif",
      alt: "Image of Alex G website redesign homepage",
    },
    {
      image: "/adcampaign.webp",
      alt: "Image of travel ad campaign design",
    },
    {
      image: "/personaldesign.webp",
      alt: "Image of personal branding elements",
    },
  ];
  return (
    <>
      <Head>
        <title>Just for Fun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconpersonal.webp" />
      </Head>
      <Header />
      <ScrollTriggeredSection>
        <div className={styles.imgContainer}>
          <LazyLoadedMain src="/funbg.webp" className={styles.mainImg} alt="" />
        </div>
      </ScrollTriggeredSection>
      <main>
        <div>
          <div className={styles.main}>
            <div className={styles.spacer} />
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
            </ScrollTriggeredSection>
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <h2>Art</h2>
              <p>Marker, paint, pencil, pen. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
              <div className={styles.spacer} />
              <div className={styles.spacer} />
              <ScrollTriggeredSection>
                <PersonalSection works={works1} />
              </ScrollTriggeredSection>
            </ScrollTriggeredSection>
            <div className={styles.spacer} />
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <h2>Photography</h2>
              <p>Nature shots. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
              <div className={styles.spacer} />
              <div className={styles.spacer} />
              <ScrollTriggeredSection>
                <PersonalSection works={works2} />
              </ScrollTriggeredSection>
            </ScrollTriggeredSection>
          </div>
          <div className={styles.spacer} />
        </div>
      </main>
      <Footer />
    </>
  );
}