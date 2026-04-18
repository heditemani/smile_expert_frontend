import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '/icons/navbar_logo.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles['footer-container']}`}>
        <div className={styles['footer-top']}>
          <div className={styles['footer-nav']}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="Smile Expert Logo" className={styles['logo-img']} />
            </Link>
            <ul className={styles['footer-links']}>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/before-after">{t('nav.before_after')}</Link></li>
              <li><Link to="/services">{t('nav.services')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className={styles['footer-contact']}>
            <div className={styles['contact-item']}>
              <i className="ph ph-map-pin"></i>
              <p>{t('footer.address')}</p>
            </div>
            <div className={styles['contact-item']}>
              <i className="ph ph-envelope-simple"></i>
              <p>dentalclinic.tn@gmail.com</p>
            </div>
            <div className={styles['contact-item']}>
              <i className="ph ph-phone"></i>
              <p>+216 53 99 00 79 / 72 270 888</p>
            </div>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <p>{t('footer.copyright')}</p>
          <div className={styles['social-links']}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="ph-fill ph-facebook-logo"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="ph ph-instagram-logo"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="ph-fill ph-linkedin-logo"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;