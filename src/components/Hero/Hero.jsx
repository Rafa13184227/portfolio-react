import styles from './Hero.module.css'

function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.heroContent}>
                <span className={styles.greeting}>Hola, soy</span>
                <h1 className={styles.name}>Rafael Hoyos</h1>
                <h2 className={styles.role}>
                    Full Stack Developer
                    <span className={styles.accent}> Junior</span>
                </h2>
                <p className={styles.bio}>
                    Estudiante de Tecnología en Análisis y Programación en la UAM Colombia.
                    Apasionado por construir interfaces limpias con React y backends robustos con Node.js.
                </p>
                <div className={styles.ctaGroup}>
                    <a href="#projects" className={styles.btnPrimary}>
                        Ver Proyectos
                    </a>
                    <a href="#contact" className={styles.btnSecondary}>
                        Contáctame
                    </a>
                </div>
            </div>

            <div className={styles.heroImage}>
                <div className={styles.imageWrapper}>
                    <img
                        src="/foto-perfil.jpg"
                        alt="Rafael Hoyos - Full Stack Developer"
                        className={styles.profilePhoto}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero