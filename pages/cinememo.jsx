import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";
import Link from "next/link";

export default function Cinememo() {
    return (
        <>
            <Head>
                <title>Cinememo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Cinememo"
                            paragraphs={[
                                "Cinememo is a movie and TV show tracking app I developed, designed and presented as my capstone project for my master’s degree. It is a fully functioning CRUD app developed using MongoDB, Next.js and React.",
                                "The app allows users to create an account, search for movie and TV show titles using the OMDb API, view details about the titles, add and remove titles to and from their user lists, and it also allows users to generate a random movie pick.",
                                "Although Cinememo is functional and user friendly, it is nothing without its design. The design was inspired by elements of old-school cinema, like film strips and 3D glasses. I wanted to create a sleek, clean brand that also evokes a feeling of nostalgia in the user.",
                                "Don't hesitate to create an account and try out the app!",
                            ]}
                            link={{ href: "https://cinememo.vercel.app/", text: "Start using Cinememo" }}
                            images={[
                                "/cinememo2.webp",
                                "/cinememo.webp",
                                "/cinememo1.webp",
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