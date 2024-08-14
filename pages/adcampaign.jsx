import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";

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
                            title="Ad Campaign"
                            paragraphs={[
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cumque nulla, optio aut quod atque repellendus sunt deleniti. Voluptatem eligendi pariatur vitae obcaecati repellendus delectus aliquid vel eaque placeat nisi!",
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cumque nulla, optio aut quod atque repellendus sunt deleniti. Voluptatem eligendi pariatur vitae obcaecati repellendus delectus aliquid vel eaque placeat nisi!",
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cumque nulla, optio aut quod atque repellendus sunt deleniti. Voluptatem eligendi pariatur vitae obcaecati repellendus delectus aliquid vel eaque placeat nisi!"
                            ]}
                            link={{ href: "https://example.com", text: "Check out my work" }}
                            images={[
                                "/adcampaign.webp",
                                "/adcampaign.webp",
                                "/cinememo.webp",
                                "/cinememo.webp",
                                "/cinememo.webp",
                            ]}
                        />
                    </ScrollTriggeredSection>
                </div>
            </main>
            <Footer />
        </>
    );
}