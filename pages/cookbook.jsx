import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";
import Link from "next/link";

export default function CookBook() {
    return (
        <>
            <Head>
                <title>Recipe Book</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Colorful Cooking Recipe Book"
                            paragraphs={[
                                "In my InDesign class, we were asked to design a digital recipe book for a fictional food blogger. I decided to create a cookbook with recipes for everything from breakfast to dessert, and I centered it around cooking with color.",
                                "I decided to incorporate a rainbow of color throughout the book, starting with a dark pink and seamlessly melting into the next color with each new section of the book. For this project, I utilized parent pages, created paragraph styles and added stylized page numbers to create cohesion across the entire book",
                            ]}
                            link={{ href: "/cookbookpdf.pdf", text: "View full cookbook" }}
                            images={[
                                "/cookbookcover.webp",
                                "/cookbook1.webp",
                                "/cookbook2.webp",
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