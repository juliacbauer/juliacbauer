import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Design.module.css";
import ScrollTriggeredSection from "../components/Scroll/index";
import LazyLoadedMain from "../components/LazyMain";
import WorkSection from "../components/WorkSection/index";

export default function Design() {

  const works = [
    {
      link: "/personalbranding",
      image: "/personaldesign.webp",
      alt: "Image of personal branding elements",
      description: "Personal Branding",
    },
    {
      link: "/winterborn",
      image: "/winterborn.webp",
      alt: "Image of Winterborn homepage",
      description: "Winterborn, LLC Website",
    },
    {
      link: "/cookbook",
      image: "/indesign.webp",
      alt: "Image of cookbook cover design",
      description: "Colorful Cooking Recipe Book",
    },
    {
      link: "/portiko",
      image: "/portiko.webp",
      alt: "Image of Portiko logo",
      description: "Portiko Branding",
    },
    {
      link: "/adcampaign",
      image: "/adcampaign.webp",
      alt: "Image of travel ad campaign design",
      description: "Travel Vida Social Media Campaign",
    },
    {
      link: "/emailblast",
      image: "/emailblast.gif",
      alt: "Image of pet adoption email blast",
      description: "Pet Adoption Email Blast",
    },
    {
      link: "/alexg",
      image: "/alexg.gif",
      alt: "Image of Alex G website redesign homepage",
      description: "Alex G Website Redesign",
    },
    {
      link: "/flkids",
      image: "/flkids.webp",
      alt: "Image of FL Kids Eat Well logo",
      description: "Florida Kids Eat Well Logo Design",
    },
  ];
  return (
    <>
      <Head>
        <title>Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconpersonal.webp" />
      </Head>
      <Header />
      <ScrollTriggeredSection>
        <div className={styles.imgContainer}>
          <LazyLoadedMain src="/designbg.webp" className={styles.mainImg} alt="" />
        </div>
      </ScrollTriggeredSection>
      <main>
        <div>
          <div className={styles.main}>
            <div className={styles.spacer} />
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <p>Design is a crucial part of visual communication. Everything – from something as obvious as a logo to something as small as a specific color code – shapes the presence and perception of a brand. The right imagery, fonts and composition have the power to convey a message effectively and in engaging and aesthetically pleasing manner.</p>
              <p>Through my design courses, I have learned the science of design and how to use industry-standard tools including Adobe Photoshop, InDesign and Illustrator. These skills have empowered me to create compelling visuals that capture an audience's attention and communicate clear messages. Below is a collection of my work, including my personal branding and a website I designed as freelance work.</p>
            </ScrollTriggeredSection>
            <div className={styles.spacer} />
            <section id="designs">
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <WorkSection works={works} />
            </ScrollTriggeredSection>
            </section>
            <div className={styles.spacer} />
            <div className={styles.spacer} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}