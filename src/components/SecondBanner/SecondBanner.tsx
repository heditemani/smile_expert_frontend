import React, { useState, useEffect } from 'react';
import styles from './SecondBanner.module.css';

// 1. Definir el Props
interface SecondBannerProps {
  slides: string[];      
  title: string;         
  subtitle: string;      
  buttonText: string;    
  buttonLink?: string;   
}

const SecondBanner: React.FC<SecondBannerProps> = ({ 
  slides, 
  title, 
  subtitle, 
  buttonText, 
  buttonLink = "https://www.med.tn/medecin/dentiste/nabeul/dr-sarra-haouet-164499.html" 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={styles['contact-hero']}>
      <div className={styles.carousel}>
        <div className={styles['carousel-inner']}>
          {slides.map((img, index) => (
            <div
              key={index}
              className={`${styles['carousel-item']} ${index === currentSlide ? styles.active : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles['about-hero-overlay']}></div>

      <div className={`container ${styles['contact-hero-container']}`}>
        <div className={styles['contact-hero-content']}>
          <div className={styles['glass-plate']}>
            <h1 className={styles['contact-hero-title']}>{title}</h1>
            <p className={styles['contact-hero-subtitle']}>{subtitle}</p>
            <a href={buttonLink} target='_blank' className={`btn ${styles['btn-primary']} ${styles['btn-large']}`}>
              {buttonText}
            </a>
          </div>
        </div>

        {/* Dots (Pagination) - Yodh'hrou ken ki yabda 3andek akther men taswira */}
        {slides.length > 1 && (
          <div className={styles['hero-slider-dots']}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SecondBanner;