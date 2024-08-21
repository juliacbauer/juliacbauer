import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./LazyIcon.module.css";

export default function LazyLoadedIcon({ src, alt, className }) {
  return (
    <div className={styles.imgContainer}>
      <LazyLoadImage
        alt={alt}
        src={src}
        effect="blur"
        className={className}
      />
    </div>
  );
}