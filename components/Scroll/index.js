import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Scroll.module.css";

export default function ScrollTriggeredSection({ children, className }) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${styles.scrollSection} ${inView ? styles.visible : ''} ${className}`}
    >
      {children}
    </div>
  )
}