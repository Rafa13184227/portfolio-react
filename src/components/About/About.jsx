import styles from './About.module.css'
import { skills, categoryColors } from '../../data/skills'

function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>

                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Sobre mí</span>
                    <h2 className={styles.sectionTitle}>¿Quién soy?</h2>
                </div>

                <div className={styles.aboutGrid}>
                    {/* Bio */}
                    <div className={styles.bioCard}>
                        <p className={styles.bioText}>
                            Soy estudiante de <strong>quinto semestre</strong> en Tecnología en Análisis
                            y Programación de Sistemas Informáticos en la <strong>UAM Colombia</strong>.
                        </p>
                        <p className={styles.bioText}>
                            Me especializo en el desarrollo <strong>Full Stack</strong>, combinando
                            interfaces modernas con React y backends en Java/Node.js. Tengo nivel
                            de inglés <strong>B2</strong>, lo que me permite trabajar en equipos remotos
                            e internacionales.
                        </p>
                        <p className={styles.bioText}>
                            Busco mi primera experiencia remota como <strong>Junior Developer</strong>,
                            aportando energía, aprendizaje rápido y código limpio.
                        </p>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>5to</span>
                                <span className={styles.statLabel}>Semestre UAM</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>B2</span>
                                <span className={styles.statLabel}>Inglés</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>3+</span>
                                <span className={styles.statLabel}>Proyectos</span>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className={styles.skillsCard}>
                        <h3 className={styles.skillsTitle}>Stack & Habilidades</h3>
                        <div className={styles.badgesGrid}>
                            {skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className={styles.badge}
                                    style={{
                                        backgroundColor: categoryColors[skill.category] + '20',
                                        borderColor: categoryColors[skill.category] + '50',
                                        color: categoryColors[skill.category],
                                    }}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>

                        <div className={styles.legend}>
                            {Object.entries(categoryColors).map(([cat, color]) => (
                                <span key={cat} className={styles.legendItem}>
                                    <span className={styles.legendDot} style={{ backgroundColor: color }} />
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About