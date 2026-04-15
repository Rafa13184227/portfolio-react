import styles from './Projects.module.css'

function ProjectCard({ project }) {
    return (
        <article className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
            {project.featured && (
                <span className={styles.featuredBadge}>⭐ Destacado</span>
            )}

            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.tags}>
                    {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className={styles.cardLinks}>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkGithub}
                >
                    GitHub →
                </a>
                {project.demo && project.demo !== '#' && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkDemo}
                    >
                        Ver Demo →
                    </a>
                )}
            </div>
        </article>
    )
}

export default ProjectCard