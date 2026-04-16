import styles from './Footer.module.css'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerTop}>
                    <span className={styles.logo}>Rafael<span>.dev</span></span>
                    <nav className={styles.footerLinks}>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                    <div className={styles.socials}>
                        <a
                            href="https://github.com/Rafa13184227"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rafael-hoyosa/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© {year} Rafael Hoyos. Construido con React + Vite.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer