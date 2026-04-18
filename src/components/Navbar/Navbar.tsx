import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from'/icons/navbar_logo.svg';

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={` container ${styles['header-container']}`}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Smile Expert Logo" className={styles['logo-img']} />
        </Link>

        <nav className={styles.navbar}>
          <ul className={styles['nav-list']}>
            <li><Link to="/" className={styles['nav-link']}>Accueil</Link></li>
            <li><Link to="/about" className={styles['nav-link']}>À propos</Link></li>
            
            <li className={styles.dropdown}>
              <Link to="/services" className={`${styles['nav-link']}`}>
                Services <i className="ph ph-caret-down"></i>
              </Link>
              <ul className={styles['dropdown-menu']}>
                <li><Link to="/">Odontologie conservatrice</Link></li>
                <li><Link to="/">Prothèses dentaires</Link></li>
                <li><Link to="/">Orthodontie</Link></li> 
                <li><Link to="/">Dentisterie pédiatrique</Link></li>
                <li><Link to="/">Soins préventifs</Link></li>
                <li><Link to="/">Technologies et diagnostic</Link></li>
              </ul>
            </li>

            <li><Link to="/" className={styles['nav-link']}>Avant & Après</Link></li>
            <li><Link to="/" className={styles['nav-link']}>Contact</Link></li>
            
            <li className={styles['nav-lang']}>
              <span className={styles['nav-link']} style={{ fontWeight: 700, color: 'var(--primary-color)', cursor: 'pointer' }}>
                <i className="ph ph-translate" style={{ marginRight: '5px' }}></i>EN
              </span>
            </li>
          </ul>
        </nav>

        <Link to="/" target="_blank" className={`btn ${styles['btn-primary']}`}>Réserver</Link>

        <button className={styles['menu-toggle']} aria-label="Toggle menu">
          <i className="ph ph-list"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;