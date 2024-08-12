import Link from "next/link";
import styles from "./Work.module.css";
import ScrollTriggeredSection from "../Scroll/index";

export default function WorkSection({ works }) {
  return (
    <div className={styles.bgColorDiv}>
      <div className={styles.workDiv}>
        {works.map((work, index) => (
          <div key={index} className={styles.workCard}>
            <ScrollTriggeredSection>
              <Link href={work.link} target={work.target || "_self"}>
                <div className={styles.imgContainer}>
                  <img className={styles.workImg} src={work.image} alt={work.alt} />
                  <div className={styles.overlay}>
                    <h3 className={styles.h3}>{work.title}</h3>
                    <p>{work.description}</p>
                  </div>
                </div>
              </Link>
            </ScrollTriggeredSection>
          </div>
        ))}
      </div>
    </div>
  );
}