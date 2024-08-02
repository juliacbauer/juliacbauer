import Head from "next/head";
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Jou.module.css"

export default function Journalism() {
  return (
    <>
      <Head>
        <title>Journalism</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div>
            <h1 className={styles.h1}>Journalism</h1>
            <img style={{ width: "250px", height: "auto" }} src="/jou.png" alt="Journalism icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae.</p>
            <img style={{ width: "350px", height: "auto" }} src="/jouMeGraphic.png" alt="Headshot" />
            <br />
            <br />
            <h2>WUFT Online</h2>
            <h2>Wellness360 Magazine</h2>
            <h2>Giggle Magazine</h2>
            <h2>Florida Gator Magazine</h2>
            <h2>WUFT TV</h2>
            <h2>Local Papers</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}