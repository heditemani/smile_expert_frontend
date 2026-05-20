import React from 'react'
import styles from './SectionTitle.module.css'

const SectionTitle = () => {
  return (
    <div  className={styles.sectionTitleContainer}>
        <div>
            <h2>Section Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.</p>
        </div>

        <a href="/services" className="btn btn-outline">Explorez nos services</a>
      
    </div>
  )
}

export default SectionTitle
