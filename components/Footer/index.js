import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <p>Developed and designed by Julia Bauer </p>
            <p>© 2024</p>
            <p>Next.js | Vercel</p>
        </footer>
    );
}