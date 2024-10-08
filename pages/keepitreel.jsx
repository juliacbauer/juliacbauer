import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";
import Link from "next/link";

export default function KeepItReel() {
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
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Keep It Reel"
                            paragraphs={[
                                "Keep It Real is a movie-searching app that I worked on with two of my peers. It is the first JavaScript project we coded as part of our master's program. This app incorporates two external APIs, allowing users to search for movie titles and view up-to-date trending titles.",
                                "Working on this as part of a team was a valuable experience. Getting to build on each other's ideas allowed us to develop a clean, functional and useful app. For example, I developed the search page, and my teammate had the idea to add the trailer and Amazon features. They built off my code to include these features, which enhance the overall user experience.",
                            ]}
                            link={{ href: "https://renabmew.github.io/com6338-10-10-bauer-brown-colver/index.html", text: "Visit website" }}
                            images={[
                                "/keepitreel3.webp",
                                "/keepitreel.webp",
                                "/keepitreel2.webp",
                            ]}
                        />
                    </ScrollTriggeredSection>
                </div>
                <br />
                <br />
                <br />                <Link href="/development#apps">
                    <p>Return to Development page</p>
                </Link>
            </main>
            <Footer />
        </>
    );
}