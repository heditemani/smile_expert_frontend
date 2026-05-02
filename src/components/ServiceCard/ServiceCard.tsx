import React from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  active: boolean;
  backgroundImage?: string;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  subtitle, 
  icon, 
  backgroundImage,
  active,
 onClick
}) => {
  return (
    <div className={styles.card}>
      {/* Background image fades in over the green background */}
      <div 
        className={styles.hoverBackground} 
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      />

      {/* Content remains in the exact same place */}
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        
        <h3 className={styles.title}>{title}</h3>
        
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};