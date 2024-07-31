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
                    <Link href="/"><img className={`${styles.logo} ${styles.bob}`} src="/logo.png" alt="Logo" /></Link>
                </p>
            </div>
            <div className={styles.rightLinks}>
                <div onClick={onClickLists} style={{ cursor: "pointer" }}>
                    <p className={styles.workLink}>Work</p>
                    {displayLists && (
                        <div className={styles.displayLists}>
                            <p><Link href="/jou">Journalism</Link></p>
                            <p><Link href="/design">Design</Link></p>
                            <p><Link href="/dev">Development</Link></p>
                            <p><Link href="/fun">Just for Fun</Link></p>
                        </div>
                    )}
                </div>
                <p>
                    <Link href="/about">About</Link>
                </p>
                <p>
                    <Link href="/contact">Contact</Link>
                </p>
            </div>
        </header>
    );
}