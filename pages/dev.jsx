import Head from "next/head";
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Dev.module.css"
import Link from "next/link";

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
            <img style={{ width: "250px", height: "auto" }} src="/dev.png" alt="Development icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolore cupiditate blanditiis distinctio temporibus non. Deserunt velit eum eveniet sapiente eius quaerat fugiat sit odit quisquam. Laboriosam, eligendi dolorum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non voluptatem ad delectus. Dolore architecto, deserunt ratione vel, magnam ducimus soluta sint quo, earum quos consequatur iure sequi ab repudiandae.</p>
            <br />
            <h2>Capstone Project</h2>
            <br />
            <h2>Portfolio Site</h2>
            <p>(This website!)</p>
            <br />
            <h2>Web 3 Project</h2>
            <br />
            <h2>Web 1 Project</h2>
            <br />
            <h2>First Project</h2>
            <br />
            <h2>Wanna see more?</h2>
            <p>Feel free to view more skill-based work on my GitHub. Looking at my repositories in chronological order illustrates my web development learning process via the Web Design and Online Communication program within the Univeristy of Florida's M.A. in Mass Communication degree.</p>
            <p>You can see my skills grow from just basic HTML to include CSS, JavaSript, Node, MongoDB, and more, finally culminating with multiple full-stack CRUD apps: my Advanced Web 3 project, ProsePal, and my Capstone project, Cinememo.</p>
            <br />
            <div className={styles.btnDiv}>
              <Link href="https://github.com/juliacbauer" target="blank">
                <img className={`${styles.bob} ${styles.btn}`} src="/githubbtn.png" alt="GitHub button" />
              </Link>
            </div>
          </div>
          <br />
        </div>
      </main>
      <Footer />
    </>
  );
}