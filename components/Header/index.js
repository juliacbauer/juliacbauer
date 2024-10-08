import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {

    const [displayLists, setDisplayLists] = useState(false);
    const router = useRouter();

    function onClickLists() {
        setDisplayLists((prevDisplayLists) => !prevDisplayLists);
    }
    const isDarkBackgroundPage = router.pathname.startsWith('/journalism') || router.pathname.startsWith('/design') || router.pathname.startsWith('/development') || router.pathname.startsWith('/fun');


    return (
        <header className={styles.container}>
            <div className={styles.logoLeft}>
                <div className={styles.logoContainer}>
                    <p className={styles.logoPlaceholder}>
                        <Link href="/"><img className={`${styles.logo} ${styles.bob}`} src="/finalpersonallogo.webp" alt="Logo" /></Link>
                    </p>
                </div>
            </div>
            <div className={styles.rightLinks}>
                <div onClick={onClickLists} style={{ cursor: "pointer" }}>
                    <p className={`${styles.hoverLink} ${isDarkBackgroundPage ? styles.whiteLink : ''}`}>Work</p>
                    {displayLists && (
                        <div className={styles.displayLists}>
                            <p className={styles.hoverLink}><Link href="/journalism">Journalism</Link></p>
                            <p className={styles.hoverLink}><Link href="/design">Design</Link></p>
                            <p className={styles.hoverLink}><Link href="/development">Development</Link></p>
                        </div>
                    )}
                </div>
                <p className={`${styles.hoverLink} ${isDarkBackgroundPage ? styles.whiteLink : ''}`}>
                    <Link href="/about">About</Link>
                </p>
            </div>
        </header>
    );
}