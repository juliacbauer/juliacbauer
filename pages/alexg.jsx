import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";
import Link from "next/link";

export default function AlexG() {
    return (
        <>
            <Head>
                <title>Alex G</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Alex G Website Redesign"
                            paragraphs={[
                                "In my Photoshop class, we had to choose a website homepage to redesign for desktop and mobile. I chose the website of one of my favorite musical artists, Alex G. His website is very basic (see below), and there is no real organization to it. I thought that a website redesign would not only enhance the user’s experience, but it would also help Alex G’s brand reflect his music more closely.",
                                "For the redesign, I restructured the homepage to include a hero image of Alex G performing, which leads into a clickable cutout of his latest album release with a call-to-action button. As the user scrolls, there are clickable merchandise cards that lead to his shop, his recent music video, his upcoming tour locations and a newsletter signup. The second image is my desktop redesign and the third image is the mobile version.",                            
                            ]}
                            images={[
                                "/alexgoriginal.webp",
                                "/alexgdesktop.gif",
                                "/alexgmobile.gif",
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