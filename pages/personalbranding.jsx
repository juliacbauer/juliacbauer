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
                <title>Personal Brand</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Personal Branding"
                            paragraphs={[
                                "When I sat down to design my personal brand, I had no vision in mind other than that I wanted to use the color yellow. This was essentially the launching point for my entire brand. I wanted to be authentic and fun by utilizing my favorite color while also designing a brand that was professional and clean.",
                                "I experimented with HTML color codes, eventually landing on this shade and pairing it with this greenish-blueish-grayish shade and a very dark brown color for my body text. From there, I played around on Illustrator creating different logos for hours until I drew the perfect one. Since my logo uses organic lines for my initials, I wanted to incorporate organic shapes throughout my website, such as the shapes I used for the buttons and as backgrounds behind my headshots. I designed these shapes to be fun yet clean. Similarly, I chose heading and body fonts that also give off that feel and designed icons for each section of my website (journalism, design and development) to match my brand.",
                                "Ultimately, I wanted my personal brand to be polished and professional but also a reflection of my personality."
                            ]}
                            images={[
                                "/portfolio.webp",
                                "/finalpersonallogo.webp",
                                "/personaldesignicons.webp",
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