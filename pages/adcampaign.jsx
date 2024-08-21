import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";
import Link from "next/link";

export default function AdCampaign() {
    return (
        <>
            <Head>
                <title>Ad Campaign</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Travel Vida Social Media Campaign"
                            paragraphs={[
                                "This social media ad campaign was an exercise for my Photoshop class. The ficitonal company, Travel Vida, had a target audience of young adults and wanted to appeal to group travelers and solo travelers looking to meet people. The company wanted to create a unified, cohesive social media ad campaign across Instagram and Facebook.",
                                "I chose photos I felt would appeal to young adults with a focus on the togetherness aspect of the company, and I used the company's logo as inspiration for my color choices. However, I felt like the imagery and copy I wrote was not enough. So, I designed a shape accent that I used across the ads, varying the colors depending on the photo.",
                            ]}
                            images={[
                                "/adcampaign.webp",
                                "/fbpost.webp",
                                "/igstory.gif",
                            ]}
                        />
                    </ScrollTriggeredSection>
                </div>
                <br />
                <br />
                <br />
                <Link href="/design#designs">
                    <p>Return to Design page</p>
                </Link>
            </main>
            <Footer />
        </>
    );
}