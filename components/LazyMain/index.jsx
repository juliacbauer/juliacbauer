import Image from 'next/image';
import styles from "./LazyMain.module.css";

export default function LazyLoadedMain({ src, alt, className }) {
  return (
    <div className={styles.imgContainer}>
      <Image
        alt={alt}
        src={src}
        layout="responsive"
        width={2273} // Specify your original image width
        height={1131} // Specify your original image height
        priority={true} // Preload the image for LCP
        className={className}
      />
    </div>
  );
}