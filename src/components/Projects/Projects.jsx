import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>

                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Mis trabajos</span>
                    <h2 className={styles.sectionTitle}>Proyectos</h2>
                    <p className={styles.sectionSubtitle}>
                        Una selección de lo que he construido aprendiendo y practicando.
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects