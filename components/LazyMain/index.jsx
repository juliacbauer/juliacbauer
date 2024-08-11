import Image from "next/image";
import { useState } from "react";
import styles from "./LazyMain.module.css";

export default function LazyLoadedMain({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`${styles.container} ${className}`}>
    <Image
      alt={alt}
      src={src}
      layout="responsive"
      width={2273}
      height={1131}
      priority={true}
      className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
      onLoadingComplete={() => setIsLoaded(true)}
      sizes="(max-width: 600px) 480px,
             (max-width: 900px) 768px,
             (max-width: 1200px) 1200px,
             2273px"
    />
    </div>
  );
}