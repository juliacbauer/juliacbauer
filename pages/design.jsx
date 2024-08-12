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
      link: "/winterborn",
      image: "/winterborn.webp",
      alt: "Image of Winterborn homepage",
      description: "Winterborn LLC Website",
    },
    {
      link: "/flkids",
      image: "/flkids.webp",
      alt: "Image of FL Kids Eat Well logo",
      description: "Florida Kids Eat Well Logo Design",
    },
    {
      link: "/portiko",
      image: "/portiko.webp",
      alt: "Image of Portiko logo",
      description: "Portiko Branding",
    },
    {
      link: "/emailblast",
      image: "/emailblast.gif",
      alt: "Image of pet adoption email blast",
      description: "Pet Adoption Email Blast",
    },
    {
      link: "/colorfulcooking",
      image: "/indesign.webp",
      alt: "Image of cookbook cover design",
      description: "Colorful Cooking Cookbook Design",
    },
    {
      link: "/alexgredesign",
      image: "/alexg.gif",
      alt: "Image of Alex G website redesign homepage",
      description: "Alex G Website Redesign",
    },
    {
      link: "/travelvida",
      image: "/adcampaign.webp",
      alt: "Image of travel ad campaign design",
      description: "Travel Vida Social Media Campaign",
    },
    {
      link: "/personalbranding",
      image: "/personaldesign.webp",
      alt: "Image of personal branding elements",
      description: "Personal Branding",
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur.</p>
            </ScrollTriggeredSection>
            <div className={styles.spacer} />
            <div className={styles.spacer} />
            <ScrollTriggeredSection>
              <WorkSection works={works} />
            </ScrollTriggeredSection>
            <div className={styles.spacer} />
            <div className={styles.spacer} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}