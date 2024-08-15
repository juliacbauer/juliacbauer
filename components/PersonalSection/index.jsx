import styles from "./Personal.module.css";
import ScrollTriggeredSection from "../Scroll/index";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function WorkSection({ works }) {
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
    <div className={styles.bgColorDiv}>
      <div className={styles.workDiv}>
        {works.map((work, index) => (
          <div key={index} className={styles.workCard}>
            <ScrollTriggeredSection>
              <div className={styles.imgContainer}>
                <img className={styles.workImg} src={work.image} alt={work.alt}
                  onClick={() => handleImageClick(work.image)} />
              </div>
            </ScrollTriggeredSection>
          </div>
        ))}
      </div>
      
      {/* Render the zoomedOverlay using a portal */}
      {zoomedOverlay && createPortal(zoomedOverlay, document.body)}
    </div>
  );
}