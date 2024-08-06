import Head from "next/head";
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Fun.module.css"

export default function Fun() {
  return (
    <>
      <Head>
        <title>Just for Fun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div>
            <h1 className={styles.h1}>Just For Fun</h1>
            <img style={{ width: "250px", height: "auto" }} src="/finalpersonallogo.png" alt="Logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae.</p>
            <br />
            <h2>Personal Branding</h2>
            <br />
            <h2>Art</h2>
            <br />
            <h2>Photography</h2>
          </div>
          <br />
        </div>
      </main>
      <Footer />
    </>
  );
}