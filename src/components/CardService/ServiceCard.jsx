import React from 'react'
import styles from './ServiceCard.module.css'

const ServiceCard = ({ bgImage, icon, title, description }) => {
  return (
    <div className={styles.serviceHoverCard}>
      <div 
        className={styles.serviceBg} 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className={styles.contentWrapper}>
        <div className={styles.serviceIcon}>
          <img src={icon} alt="Service Icon" />
        </div>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDesc}>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard