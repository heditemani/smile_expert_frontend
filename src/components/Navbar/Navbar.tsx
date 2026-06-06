import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

import logo from '/icons/navbar_logo.svg';
import enFlag from '/icons/en.svg';
import frFlag from '/icons/fr.svg';
import itFlag from '/icons/italy.svg';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null); // Cleaned from TypeScript types

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
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

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className={styles.header}>
      <div className={`container ${styles['header-container']}`}>
        
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Logo" className={styles['logo-img']} />
        </Link>

        <nav className={`${styles.navbar} ${isMenuOpen ? styles['navbar-active'] : ''}`}>
          <ul className={styles['nav-list']}>
            <li><Link to="/" className={styles['nav-link']} onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link></li>
            <li><Link to="/about" className={styles['nav-link']} onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link></li>
            
            {/* Services Dropdown - Updated with the 4 main high-end categories */}
            <li className={styles.dropdown}>
              <Link to="/services" className={styles['nav-link']}>
                {t('nav.services')} <i className="ph ph-caret-down"></i>
              </Link>
              <ul className={styles['dropdown-menu']}>
                <li><Link to="/services/bucco-dentaire" onClick={() => setIsMenuOpen(false)}>{t('services.implants_surgery')}</Link></li>
                <li><Link to="/services/soins-bucco-dentaires" onClick={() => setIsMenuOpen(false)}>{t('services.cosmetic_dentistry')}</Link></li>
                <li><Link to="/services/therapeutique" onClick={() => setIsMenuOpen(false)}>{t('services.orthodontics')}</Link></li> 
                <li><Link to="/services/protheses-dentaires" onClick={() => setIsMenuOpen(false)}>{t('services.pediatric_preventive')}</Link></li>
              </ul>
            </li>

            <li><Link to="/Before&After" className={styles['nav-link']} onClick={() => setIsMenuOpen(false)}>{t('nav.before_after')}</Link></li>
            <li><Link to="/contact" className={styles['nav-link']} onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link></li>
            
            <li className={styles.langWrapper} ref={langRef}>
              <div className={styles.langSelected} onClick={() => setIsLangOpen(!isLangOpen)}>
                <img src={currentLang.flag} alt={currentLang.label} className={styles.flagImg} />
                <span>{currentLang.label}</span>
                <i className={`ph ph-caret-down ${isLangOpen ? styles.rotate : ''}`}></i>
              </div>
              
              {isLangOpen && (
                <ul className={styles.langDropdown}>
                  {languages.map((lang) => (
                    <li 
                      key={lang.code} 
                      className={i18n.language === lang.code ? styles.activeLang : ''}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <img src={lang.flag} alt={lang.label} />
                      {lang.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <Link to="https://www.med.tn/..." target='_blank' className={`btn ${styles['btn-primary']}`}>
          {t('nav.book_now')}
        </Link>

        <button 
          className={`${styles['menu-toggle']} ${isMenuOpen ? styles['toggle-active'] : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;