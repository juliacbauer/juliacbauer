import Image from 'next/image';

export default function LazyLoadedMain({ src, alt, className }) {
  return (
    <div className={styles.imgContainer}>
      <Image
        alt={alt}
        src={src}
        layout="responsive" /* Automatically calculates dimensions */
        width={2273} /* Original image width */
        height={1131} /* Original image height */
        priority={true} /* Preload the image */
        className={className}
      />
    </div>
  );
}