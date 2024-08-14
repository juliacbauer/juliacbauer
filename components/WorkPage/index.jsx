import styles from "./WorkPage.module.css"
import Link from "next/link";
import ScrollTriggeredSection from "../Scroll";


export default function WorkPage({ title, paragraphs, images, link }) {
    return (
        <section>
            <ScrollTriggeredSection>
                <h1 className={styles.h1}>{title}</h1>
                {paragraphs.map((text, index) => (
                    <p className={styles.workP} key={index}>{text}</p>
                ))}
            </ScrollTriggeredSection>
            <ScrollTriggeredSection>
                {link && (
                    <Link className={styles.link} href={link.href}>
                        <p>{link.text}</p>
                    </Link>
                )}
            </ScrollTriggeredSection>
            <ScrollTriggeredSection>
                <div className={styles.bgColorDiv}>
                    {images.map((src, index) => (
                        <ScrollTriggeredSection>
                            <img className={styles.workImg}
                                key={index}
                                src={src}
                                alt={`Content image ${index + 1}`}
                            />
                        </ScrollTriggeredSection>
                    ))}
                </div>
            </ScrollTriggeredSection>
        </section>
    );
};
