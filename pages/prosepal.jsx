import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";
import Link from "next/link";

export default function ProsePal() {
    return (
        <>
            <Head>
                <title>Prose Pal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Prose Pal"
                            paragraphs={[
                                "Prose Pal is a vocabulary-tracking CRUD app that uses MongoDB, React and Next.js. Although we were provided a starter template with some CSS and an authentication system, this is the first CRUD app I developed.",
                                "I used a dictionary API for the search feature that allows the user to look up a word and view its definition, synonyms and antonyms. From there, the user can add the word to their vocabulary list for them to view later. While this app is very simple, I made sure to add features that would optimize UX, such as messages that display after adding a word to the vocabulary list.",
                            ]}
                            link={{ href: "https://prose-pal-julia-bauer.vercel.app/", text: "Check out Prose Pal" }}
                            images={[
                                "/prosepal.webp",
                                "/prosepal2.webp",
                                "/prosepal1.webp",
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