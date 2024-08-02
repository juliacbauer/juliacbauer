import Head from "next/head";
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/About.module.css"
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div>
            <div>
              <div className={styles.logoDiv}>
                <h1 className={styles.headings}>About Me</h1>
                <img className={styles.logo} src="/finalpersonallogo.png" alt="Logo" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae.</p>
            </div>
            <br />
            <div className={styles.edDiv}>
              <div>
                <h2>Experience</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae.</p>
              </div>
              <br />
              <div>
                <h2>Education</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae.</p>
              </div>
              <br />
            </div>
            <h2 className={styles.headings}>Resumé</h2>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <h2 className={styles.headings}>Contact</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat sint natus dignissimos quis praesentium?</p>
          <br />
          <div className={styles.contactDiv}>
            <Link href="https://www.linkedin.com/in/julia-bauer-896229201/" target="blank">
              <img className={`${styles.bob} ${styles.contactBtn}`} src="/linkedinbtn.png" alt="LinkedIn button" />
            </Link>
            <Link href="/">
              <img className={`${styles.bob} ${styles.contactBtn}`} src="/resumebtn.png" alt="Resumé button" />
            </Link>
            <Link href="/">
              <img className={`${styles.bob} ${styles.contactBtn}`} src="/emailbtn.png" alt="Email button" />
            </Link>
          </div>
          <br />
        </div>
      </main>
      <Footer />
    </>
  );
}