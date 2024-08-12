import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Dev.module.css";
import Link from "next/link";
import ScrollTriggeredSection from "../components/Scroll/index";

export default function Cinememo() {
    return (
        <>
            <Head>
                <title>Keep It Reel</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <div className={styles.main}>
                        <ScrollTriggeredSection>
                            <h1>Keep It Reel</h1>
                            <Link href="https://renabmew.github.io/com6338-10-10-bauer-brown-colver/" target="_blank">
                                <p>Keep It Reel</p>
                            </Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cumque nulla, optio aut quod atque repellendus sunt deleniti. Voluptatem eligendi pariatur vitae obcaecati repellendus delectus aliquid vel eaque placeat nisi!</p>
                        </ScrollTriggeredSection>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}