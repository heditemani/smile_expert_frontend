
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '/icons/navbar_logo.svg';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.header}>
      <div className={` container ${styles['header-container']}`}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Logo" className={styles['logo-img']} />
        </Link>

        <nav className={styles.navbar}>
          <ul className={styles['nav-list']}>
            
            <li><Link to="/" className={styles['nav-link']}>{t('nav.home')}</Link></li>
            <li><Link to="/about" className={styles['nav-link']}>{t('nav.about')}</Link></li>
            
            <li className={styles.dropdown}>
              <Link to="/services" className={`${styles['nav-link']}`}>
                {t('nav.services')} <i className="ph ph-caret-down"></i>
              </Link>
              <ul className={styles['dropdown-menu']}>
                <li><Link to="/">{t('services.conservative')}</Link></li>
                <li><Link to="/">{t('services.prosthetics')}</Link></li>
                <li><Link to="/">{t('services.orthodontics')}</Link></li> 
                <li><Link to="/">{t('services.pediatric')}</Link></li>
                <li><Link to="/">{t('services.preventive')}</Link></li>
                <li><Link to="/">{t('services.tech')}</Link></li>
              </ul>
            </li>

            <li><Link to="/" className={styles['nav-link']}>{t('nav.before_after')}</Link></li>
            <li><Link to="/" className={styles['nav-link']}>{t('nav.contact')}</Link></li>
            
            <select 
              onChange={(e) => changeLanguage(e.target.value)} 
              value={i18n.language}
              className={styles.langSelect}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="it">IT</option>
            </select>
          </ul>
        </nav>

        <Link to="/" className={`btn ${styles['btn-primary']}`}>{t('nav.book_now')}</Link>

        <button className={styles['menu-toggle']}>
          <i className="ph ph-list"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;