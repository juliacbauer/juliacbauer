import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    
    const [displayLists, setDisplayLists] = useState(false);
    function onClickLists() {
        setDisplayLists((prevDisplayLists) => !prevDisplayLists);
    }
    
    return (
        <header className={styles.container}>
            <div className={styles.logoLeft}>
                <p>
                    <Link href="/"><img className={`${styles.logo} ${styles.bob}`} src="/finalpersonallogo.webp" alt="Logo" /></Link>
                </p>
            </div>
            <div className={styles.rightLinks}>
                <div onClick={onClickLists} style={{ cursor: "pointer" }}>
                    <p className={`${styles.workLink} ${styles.hoverLink}`}>Work</p>
                    {displayLists && (
                        <div className={styles.displayLists}>
                            <p className={styles.hoverLink}><Link href="/journalism">Journalism</Link></p>
                            <p className={styles.hoverLink}><Link href="/design">Design</Link></p>
                            <p className={styles.hoverLink}><Link href="/development">Development</Link></p>
                            <p className={styles.hoverLink}><Link href="/fun">Just for Fun</Link></p>
                        </div>
                    )}
                </div>
                <p className={styles.hoverLink}>
                    <Link href="/about">About</Link>
                </p>
            </div>
        </header>
    );
}