import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

const INITIAL_FORM = { from_name: '', from_email: '', message: '' }

function Contact() {
    const formRef = useRef(null)
    const [formData, setFormData] = useState(INITIAL_FORM)
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setStatus('success')
            setFormData(INITIAL_FORM)
        } catch (error) {
            console.error('EmailJS error:', error)
            setStatus('error')
        }
    }

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>

                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>¿Hablamos?</span>
                    <h2 className={styles.sectionTitle}>Contacto</h2>
                    <p className={styles.sectionSubtitle}>
                        Estoy buscando mi primera oportunidad remota. Si tienes un proyecto
                        o una oferta, escríbeme.
                    </p>
                </div>

                <div className={styles.contactGrid}>
                    {/* Info lateral */}
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>📍</span>
                            <div>
                                <strong>Ubicación</strong>
                                <p>Manizales, Colombia</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>🌐</span>
                            <div>
                                <strong>Inglés</strong>
                                <p>Nivel B2 — trabajo remoto</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>💼</span>
                            <div>
                                <strong>Disponibilidad</strong>
                                <p>Inmediata — Junior Full Stack</p>
                            </div>
                        </div>

                        <div className={styles.socialLinks}>
                            <a
                                href="https://github.com/Rafa13184227"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rafael-hoyosa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Formulario */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className={styles.form}
                    >
                        <div className={styles.inputGroup}>
                            <label htmlFor="from_name">Nombre</label>
                            <input
                                id="from_name"
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="from_email">Email</label>
                            <input
                                id="from_email"
                                type="email"
                                name="from_email"
                                value={formData.from_email}
                                onChange={handleChange}
                                placeholder="tu@email.com"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Cuéntame sobre tu proyecto u oferta..."
                                rows={5}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                        </button>

                        {status === 'success' && (
                            <p className={styles.successMsg}>
                                ¡Mensaje enviado! Te respondo pronto.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className={styles.errorMsg}>
                                Algo falló. Intenta de nuevo o escríbeme directamente.
                            </p>
                        )}
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact