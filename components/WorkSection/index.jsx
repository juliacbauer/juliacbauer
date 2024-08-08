import Link from "next/link";
import styles from "./Work.module.css";

export default function WorkSection({ works }) {
  return (
    <div className={styles.bgColorDiv}>
      <div className={styles.workDiv}>
        {works.map((work, index) => (
          <div key={index} className={styles.workCard}>
            <Link href={work.link} target={work.target || "_self"}>
              <img className={`${styles.bob} ${styles.workImg}`} src={work.image} alt={work.alt} />
            </Link>
            <h3 className={styles.h3}>{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}