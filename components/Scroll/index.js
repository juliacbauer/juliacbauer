import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Scroll.module.css";

export default function ScrollTriggeredSection({ children, className }) {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }
      setLastScrollY(currentScrollY)
    };

    window.addEventListener("scroll", handleScroll)

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [lastScrollY]);

  return (
    <div
      ref={ref}
      className={`${styles.scrollSection} 
        ${inView ? styles.visible : scrollDirection === "down" ? styles.hiddenDown : styles.hiddenUp} 
        ${className}`}
    >
      {children}
    </div>
  );
}