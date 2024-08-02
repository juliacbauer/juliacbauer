import Head from "next/head";
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Dev.module.css"

export default function Dev() {
  return (
    <>
      <Head>
        <title>Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div>
            <h1 className={styles.h1}>Development</h1>
            <img style={{ width: "250px", height: "auto"}} src="/dev.png" alt="Development icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae.</p>
            <h2>Capstone Project</h2>
            <h2>Portfolio Site</h2>
            <p>(This website!)</p>
            <h2>Web 3 Project</h2>
            <h2>Web 1 Project</h2>
            <h2>First Project</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}