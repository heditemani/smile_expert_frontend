import React from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  active?: boolean;
  backgroundImage?: string;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  subtitle, 
  icon, 
  backgroundImage,
  active = false,
  onClick
}) => {
  return (
    <div 
      className={`${styles.card} ${active ? styles.active : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {/* Background image fades in on hover */}
      {backgroundImage && (
        <div 
          className={styles.hoverBackground} 
          style={{ backgroundImage: `url(${backgroundImage})` }} 
        />
      )}

      {/* Content stays in the exact same position */}
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;