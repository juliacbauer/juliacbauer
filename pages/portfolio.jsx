import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";
import Link from "next/link";

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Personal Site</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Portfolio Website"
                            paragraphs={[
                                "After I finished my master's degree, I wanted to put my web development skills to the test and code my own personal portfolio site instead of using a website builder. However, I did not want my site to be as static as my school projects. I wanted it to be interactive, responsive and professional.",
                                "This site shows the skills I learned through my master's programs, and it also helped me learn even more about code and further develop my skills. I had fun experimenting with features from the React library, like lazy load images and scroll-triggered content. Implementing these features made my site more responsive and engaging and eliminated any awkward loading time.",
                                "In addition to the React library, developing this site also gave me experience with fixing cumulative layout shifts. As an internet user, cumulative layout shifts are my biggest pet peeve, so I could not rest until I eliminated all of them. With the help of Google Inspect's Lighthouse tool, my quest was successful.",
                                "Overall, I chose to build my portfolio site from scratch because I felt there was no better way to show my development and design skills, my initiative and my determination."
                            ]}
                            link={{ href: "https://github.com/juliacbauer/juliacbauer", text: "View my Github Repository" }}
                            images={[
                                "/portfolio.webp",
                                "/portfolio1.webp",
                                "/portfolio2.webp",
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