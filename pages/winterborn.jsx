import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTriggeredSection from "../components/Scroll/index";
import WorkPage from "../components/WorkPage";
import Link from "next/link";

export default function Winterborn() {
    return (
        <>
            <Head>
                <title>Winterborn</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconpersonal.webp" />
            </Head>
            <Header />
            <main>
                <div>
                    <ScrollTriggeredSection>
                        <WorkPage
                            title="Winterborn, LLC Website"
                            paragraphs={[
                                "Winterborn, LLC is a Louisiana-based professional training company that offers active threat courses, firearms training, threat assessments and tactical operations training programs to corporate organizations to prepare them to handle emergencies and ensure their employees’ safety. They hired me as a freelance web designer to revamp their website.",
                                "I redesigned Winterborn’s website with the potential customer in mind. If I was an organization in search of a tactical training provider, what information would I want to see first? What navbar organization would be most logical? How could the pages be more readable? With those questions in mind, I created new web pages based on the services Winterborn offers and moved any related information off the homepage. I also created a contact page with a calendar feature displaying Winterborn’s upcoming classes and locations. In addition, I added a “meet the team” carousel on the home page and included testimonial quotes from organizations that have received Winterborn training and images from those trainings.",
                                "Outside of website structure and design, I edited all of the copy on the site, making it more concise and readable by arranging the chunks of text to optimize white space. Additionally, I set up the company's LinkedIn page and created posts about their recent trainings."
                            ]}
                            link={{ href: "https://www.winterborn.net", text: "Visit the Winterborn site" }}
                            images={[
                                "/winterborn.webp",
                                "/winterborn2.webp",
                                "/winterborn1.webp",
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