import React from 'react'
import styles from './SectionTitle.module.css'

const SectionTitle = ({ title, description, buttonText, href }) => {
  return (
    <div className={styles.sectionTitleContainer}>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {buttonText && href && (
        <a href={href} className="btn btn-outline">
          {buttonText}
        </a>
      )}
    </div>
  )
}

export default SectionTitle