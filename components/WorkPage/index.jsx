import styles from "./WorkPage.module.css"
import Link from "next/link";
import ScrollTriggeredSection from "../Scroll";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function WorkPage({ title, paragraphs, images, link }) {

    const [zoomedImage, setZoomedImage] = useState(null);
    const [isZooming, setIsZooming] = useState(false);
  

    const handleImageClick = (imageSrc) => {
        setZoomedImage(imageSrc)
        setTimeout(() => {
          setIsZooming(true)
        }, 10)
      };
    
      const handleClickOutside = () => {
        setIsZooming(false)
        setTimeout(() => {
          setZoomedImage(null)
        }, 500)
      };
    
      const zoomedOverlay = zoomedImage && (
        <div
          className={`${styles.zoomedOverlay} ${isZooming ? styles.show : ""}`}
          onClick={handleClickOutside}
        >
          <div className={styles.zoomedImageContainer}>
            <img src={zoomedImage} alt="Zoomed in" className={styles.zoomedImage} />
          </div>
        </div>
      );

    return (
        <section>
            <ScrollTriggeredSection>
                <h1 className={styles.h1}>{title}</h1>
                <div className={styles.workInfo}>
                {paragraphs.map((text, index) => (
                    <p className={styles.workP} key={index}>{text}</p>
                ))}
                </div>
            </ScrollTriggeredSection>
            <ScrollTriggeredSection>
                {link && (
                    <Link href={link.href} target="_blank">
                        <p className={styles.link}>{link.text}</p>
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
                                onClick={() => handleImageClick(src)}
                            />
                             {zoomedOverlay && createPortal(zoomedOverlay, document.body)}
                        </ScrollTriggeredSection>
                    ))}
                </div>
            </ScrollTriggeredSection>
        </section>
    );
};
