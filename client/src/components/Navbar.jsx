import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/content";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav className={`container ${styles.nav}`} aria-label="Primary">
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          {profile.name}
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav-links"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>

        <ul
          id="primary-nav-links"
          className={`${styles.links} ${isMenuOpen ? styles.linksOpen : ""}`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
