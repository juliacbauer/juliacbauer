import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";
import Link from "next/link";

export default function EmailBlast() {
    return (
        <>
            <Head>
                <title>Email Blast</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Pet Adoption Email Blast"
                            paragraphs={[
                                "One of my Photoshop projects was to create an email blast for a humane society's summer adoption event. We were given copy and a logo to include.",
                                "I decided to animate the email blast with summery pet gifs to emphasize the premise of the event. I felt that the animals wearing beach gear and playing with beach toys would appeal to the viewer's emotions and encourage them to adopt an animal from the shelter. Aditionally, I used the colors from their logo as a color palette and chose a bubbly font to make the email blast have a fun tone.",
                            ]}
                            images={[
                                "/emailgif.gif",
                                "/email1.webp",
                                "/email2.webp",
                            ]}
                        />
                    </ScrollTriggeredSection>
                </div>
                <br />
                <br />
                <br />                <Link href="/design#designs">
                    <p>Return to Design page</p>
                </Link>
            </main>
            <Footer />
        </>
    );
}