import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";
import Link from "next/link";

export default function Portiko() {
    return (
        <>
            <Head>
                <title>Portiko</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Portiko Branding"
                            paragraphs={[
                                "In my Illustrator course, we were presented with Portiko Technologies, a fictional technology company my in need of cutting-edge yet timeless branding. We were asked to design a logo, style guide, business card, letterhead and website homepage for the company.",
                                "To accomplish the cutting-edge yet timeless identity Portiko was looking for, I chose a techy shade of blue for the brand's main color and decided to use a light gray color for their typography and set it on a dark gray background. I felt the light text against the dark background was a bit of a risk design-wise, but I believed it would create a nice contrast, and – along with the wide-set heading font I chose – accomplish that progressive feeling the company was looking for.",
                            ]}
                            link={{ href: "/portikoguide.pdf", text: "View full brand guide" }}
                            images={[
                                "/portiko3.webp",
                                "/portiko2.webp",
                                "/portiko1.webp",
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