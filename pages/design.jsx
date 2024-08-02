import Head from "next/head";
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Design.module.css"

export default function Design() {
  return (
    <>
      <Head>
        <title>Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div>
            <h1 className={styles.h1}>Design</h1>
            <img style={{ width: "250px", height: "auto"}} src="/design.png" alt="Design icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae.</p>
            <h2>Winterborn</h2>
            <h2>Illustrator</h2>
            <h2>InDesign</h2>
            <h2>Photoshop</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}