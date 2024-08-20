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
                            title="Florida Kids Eat Well Logo Design"
                            paragraphs={[
                                "For my Illustrator class, we were given information about a fictional company called Florida Kids Eat Well. Based on its target audience, mission and color preferences, we were tasked with designing three logos and brandmarks for the company.",
                                "To start, I created a mood board representing the feel of the brand and the colors and imagery I wanted to incorporate. From there, I created three logos: one that really tapped into the childlike feeling (concept 3), one that had a more corporate feel but was still fun (concept 2) and one that was a combination (concept 1). I am honestly not sure which logo is my favorite - it is tied between concept 1 and concept 2. I like the play on the letter O with the orange because Florida is known for its citrus, and the crayon texture makes the logo feel friendly. However, the typography in the more corporate logo is still fun, and the shades of blue/green and orange it uses make it stand out.",
                            ]}
                            images={[
                                "/flkids1.webp",
                                "/flkids2.webp",
                                "/flkids3.webp",
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