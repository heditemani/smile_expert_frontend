
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '/icons/navbar_logo.svg';
import location from '/icons/location_footer_icon.svg';
import email from '/icons/email_footer_icon.svg';
import phone from '/icons/phone_footer_icon.svg';
import facebook from '/icons/facebook_icon.svg';
import instagram from '/icons/instagram_icon.svg';
import linkedin from '/icons/linkedin_icon.svg';


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
            <div className={styles['contact-item'] + ' ' + styles['location-icon']}>
              <img src={location} alt="Location" />
              <p>{t('footer.address')}</p>
            </div>
            <div className={styles['contact-item']}>
              <img src={email} alt="Email" />
              <p>dentalclinic.tn@gmail.com</p>
            </div>
            <div className={styles['contact-item']}>
              <img src={phone} alt="Phone" />
              <p>+216 53 99 00 79 / 72 270 888</p>
            </div>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <p>{t('footer.copyright')}</p>
          <div className={styles['social-links']}>
            <a href="https://www.facebook.com/sarra.fischer.1" target="_blank" rel="noreferrer">
                <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/dr.sarra.haouet/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/dr-sarra-haouet-104703380/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;