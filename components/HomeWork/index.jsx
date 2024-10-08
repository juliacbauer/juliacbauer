import Link from "next/link";
import styles from "./Home.module.css";
import ScrollTriggeredSection from "../Scroll/index";

export default function HomeWork({ title, works }) {
    return (
        <div className={styles.bgColorDiv}>
            <h2>{title}</h2>
            <div className={styles.workDiv}>
                {works.map((work, index) => (
                    <div key={index} className={styles.workCard}>
                        <ScrollTriggeredSection>
                            <Link href={work.link} target={work.target || "_self"}>
                                <img className={`${styles.bob} ${styles.workImg}`}
                                    src={work.image} alt={work.alt}
                                    width="200"
                                    height="auto" />
                            </Link>
                            <h3 className={styles.h3}>{work.title}</h3>
                            <p>{work.description}</p>
                        </ScrollTriggeredSection>
                    </div>
                ))}
            </div>
        </div>
    );
}