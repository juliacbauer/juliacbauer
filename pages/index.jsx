import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Julia Bauer</title>
        <meta name="description" content="Portfolio site for Julia Bauer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <main>
        <div>
          <div className={styles.hero}>
            <h1 className={styles.mainHeading}>Hello! I'm Julia Bauer.</h1>
            <p className={styles.introP}>Welcome to my website. This is a WIP.</p>
          </div>
          <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro animi ut, totam explicabo neque aut eligendi, odit eos sit magni? Qui tempore cum ratione doloribus quasi sequi? Unde, quos!</p>
            <Link href="/about">
              <button>
                More
              </button>
            </Link>
          </div>
          <br />
          <div>
            <h2>My Work</h2>
            <Link href="/jou">
              <button>
                More
              </button>
            </Link>
            <Link href="/design">
              <button>
                More
              </button>
            </Link>
            <Link href="/dev">
              <button>
                More
              </button>
            </Link>
            <Link href="/fun">
              <button>
                Other
              </button>
            </Link>
          </div>
          <br />
          <div>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic iure quis repudiandae cumque non, ipsam qui illum dolore provident accusantium, quod ipsum illo nihil, sequi culpa fuga aliquam dolores.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
