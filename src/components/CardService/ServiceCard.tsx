import React from 'react'
import styles from './ServiceCard.module.css'

const ServiceCard = ({ bgImage, icon, title, description, Link }) => {
  return (
    <a href={Link}>
    <div className={styles.serviceHoverCard} >
      <div 
        className={styles.serviceBg} 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className={styles.contentWrapper}>
          <div className={styles.icon_container}>
            <img className={styles.serviceIcon} src={icon} alt="Service Icon" />
          </div>
          <div className={styles.overlay}>
          <h3 className={styles.serviceTitle}>{title}</h3>
          <p className={styles.serviceDesc}>{description}</p>
        </div>
      </div>
    </div>
    </a>
  )
}

export default ServiceCard