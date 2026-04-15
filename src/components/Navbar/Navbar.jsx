import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            darkMode ? 'dark' : 'light'
        )
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className={styles.navbar}>
            <a href="#hero" className={styles.logo}>
                Rafael<span>.dev</span>
            </a>

            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>

            <div className={styles.navActions}>
                <button
                    className={styles.darkToggle}
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>

                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`}></span>
                    <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`}></span>
                    <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`}></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar