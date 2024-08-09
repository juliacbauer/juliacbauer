import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from "./LazyLoad.module.css";

export default function LazyLoadedImage({ src, alt, className }) {
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