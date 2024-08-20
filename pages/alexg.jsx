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
                                "In my Photoshop class, we had to choose a website homepage to redesign for desktop and mobile. I chose the website for one of my favorite musical artists, Alex G. His website is very basic, and there is no real organization to it. I thought that a website redesign would not only enhance a user’s experience, but it would also highlight Alex G’s brand elements, like his color palette, that reflect his music.",
                                "For the redesign, I restructured the homepage to include a hero image of Alex G performing, which leads into a clickable cutout of his latest album release with a call-to-action button. As the user scrolls, there are clickable merchandise cards that lead to his shop, his recent music video, his upcoming tour locations and a newsletter signup. This homepage utilizes white space much better than the original site, making it more visually appealing and user-friendly. ",
                                "Below, the first image shows the original site, the second shows my desktop redesign and the third shows my mobile redesign."
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