import React, { useState } from 'react';
import styles from './ImageSlider.module.css';

export interface ImageSliderProps {
  title: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  title,
  imageBefore,
  imageAfter,
  description,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className={styles.baServiceSection}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>{title}</h2>
      </div>

      {/* Pass el position variable kima inline style --position custom property */}
      <div 
        className={styles.imgCompare} 
        style={{ '--position': `${sliderPosition}%` } as React.CSSProperties}
      >
        <div className={styles.imageContainer}>
          <img 
            className={`${styles.imageAfter} ${styles.sliderImage}`} 
            src={imageAfter} 
            alt="Après" 
          />
          <img 
            className={`${styles.imageBefore} ${styles.sliderImage}`} 
            src={imageBefore} 
            alt="Avant" 
          />
        </div>
        
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={handleSliderChange}
          aria-label="Pourcentage de l'image avant" 
          className={styles.slider} 
        />
        
        <div className={styles.sliderLine} aria-hidden="true"></div>
        
        <div className={styles.sliderButton} aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          </svg>
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.baServiceDesc}>{description}</p>
      </div>
    </section>
  );
};

export default ImageSlider;
