

import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./LazyLoad.module.css";

export default function LazyLoadedMain({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`${styles.container} ${className}`}>
      <LazyLoadImage
        alt={alt}
        src={src}
        width="100%"
        height="auto"
        className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
        onLoad={() => setIsLoaded(true)}
        effect="blur"
      />
    </div>
  );
}