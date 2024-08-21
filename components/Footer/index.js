import styles from "./Footer.module.css";

export default function Footer() {
    const email = "juliabauercomm@gmail.com";

    function handleEmailClick() {
        window.location.href = `mailto:${email}`;
    }

    return (
        <footer className={styles.container}>
            <div className={styles.linkDiv}>
                <a href="https://github.com/juliacbauer" target="_blank">
                    <p>GitHub</p>
                </a>
                <a href="https://www.linkedin.com/in/julia-bauer-896229201/" target="_blank">
                    <p>LinkedIn</p>
                </a>
                <btn onClick={handleEmailClick} style={{ cursor: "pointer" }}>
                    <p className={styles.btn}>Email</p>
                </btn>
            </div>
            <p>Developed & designed by Julia Bauer © 2024</p>
        </footer>
    );
}