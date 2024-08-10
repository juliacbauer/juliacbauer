import Image from 'next/image';

export default function LazyLoadedMain({ src, alt, className }) {
  return (
      <Image
        alt={alt}
        src={src}
        layout="responsive"
        width={2273}
        height={1131} 
        priority={true}
        className={className}
      />
  );
}