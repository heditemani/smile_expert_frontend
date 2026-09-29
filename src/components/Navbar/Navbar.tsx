import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

import logo from '/icons/navbar_logo.svg';
import enFlag from '/icons/en.svg';
import frFlag from '/icons/fr.svg';
import itFlag from '/icons/italy.svg';

const CaretIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLLIElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'en', label: 'EN', flag: enFlag },
    { code: 'fr', label: 'FR', flag: frFlag },
    { code: 'it', label: 'IT', flag: itFlag },
  ];

  const activeLangCode = (i18n.resolvedLanguage || i18n.language || 'en').slice(0, 2);
  const currentLang = languages.find((l) => l.code === activeLangCode) || languages[0];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles['header-container']}`}>
        <Link to="/" className={styles.logo} onClick={handleLinkClick}>
          <img src={logo} alt="Smile Expert Logo" className={styles['logo-img']} />
        </Link>

        <nav className={`${styles.navbar} ${isMenuOpen ? styles['navbar-active'] : ''}`}>
          <ul className={styles['nav-list']}>
            <li>
              <Link to="/" className={styles['nav-link']} onClick={handleLinkClick}>
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles['nav-link']} onClick={handleLinkClick}>
                {t('nav.about')}
              </Link>
            </li>

            <li className={`${styles.dropdown} ${isServicesOpen ? styles['dropdown-open'] : ''}`}>
              <div className={styles.dropdownToggle}>
                <Link to="/services" className={styles['nav-link']} onClick={handleLinkClick}>
                  {t('nav.services')}
                </Link>
                <button
                  type="button"
                  className={styles.caretBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServicesOpen((prev) => !prev);
                  }}
                  aria-label="Toggle Services submenu"
                >
                  <CaretIcon className={`${styles.caretIcon} ${isServicesOpen ? styles.rotate : ''}`} />
                </button>
              </div>
              <ul className={styles['dropdown-menu']}>
                <li>
                  <Link to="/services/bucco-dentaire" onClick={handleLinkClick}>
                    {t('services.implants_surgery')}
                  </Link>
                </li>
                <li>
                  <Link to="/services/soins-bucco-dentaires" onClick={handleLinkClick}>
                    {t('services.cosmetic_dentistry')}
                  </Link>
                </li>
                <li>
                  <Link to="/services/therapeutique" onClick={handleLinkClick}>
                    {t('services.orthodontics')}
                  </Link>
                </li>
                <li>
                  <Link to="/services/protheses-dentaires" onClick={handleLinkClick}>
                    {t('services.pediatric_preventive')}
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/Before&After" className={styles['nav-link']} onClick={handleLinkClick}>
                {t('nav.before_after')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles['nav-link']} onClick={handleLinkClick}>
                {t('nav.contact')}
              </Link>
            </li>

            <li className={styles.langWrapper} ref={langRef}>
              <div className={styles.langSelected} onClick={() => setIsLangOpen(!isLangOpen)}>
                <img src={currentLang.flag} alt={currentLang.label} className={styles.flagImg} />
                <span>{currentLang.label}</span>
                <CaretIcon className={`${styles.caretIcon} ${isLangOpen ? styles.rotate : ''}`} />
              </div>

              {isLangOpen && (
                <ul className={styles.langDropdown}>
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      className={activeLangCode === lang.code ? styles.activeLang : ''}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <img src={lang.flag} alt={lang.label} />
                      {lang.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Book Appointment button in drawer */}
            <li className={styles.mobileBookItem}>
              <a
                href="https://www.med.tn/medecin/dentiste/nabeul/dr-sarra-haouet-164499.html"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles['btn-primary']}`}
                onClick={handleLinkClick}
              >
                {t('nav.book_now')}
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="https://www.med.tn/medecin/dentiste/nabeul/dr-sarra-haouet-164499.html"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${styles['btn-primary']} ${styles.desktopBookBtn}`}
        >
          {t('nav.book_now')}
        </a>

        <button
          type="button"
          className={`${styles['menu-toggle']} ${isMenuOpen ? styles['toggle-active'] : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;