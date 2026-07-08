import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ScannerIntraoral.module.css';

import scannerImg from '../../assets/images/technologies/Scanner Intraoral v.webp';
import VideoExperience from '../../components/VideoExperience/VideoExperience';

const ScannerIntraoral = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.serviceDetails}>

            <VideoExperience />
            <div className="container">
                
                {/* Header Section */}
                <div className={styles.serviceDetailsHeader}>
                    <h2 className={styles.serviceDetailsTitle}>{t('scanner_intraoral.hero.title')}</h2>
                    <p className={styles.serviceDetailsSubtitle}>{t('scanner_intraoral.hero.subtitle')}</p>
                </div>

                {/* Content Section */}
                <div className={styles.serviceDetailsContent}>
                    <div className={styles.serviceImage}>
                        <img src={scannerImg} alt="Scanner Intraoral Service" />
                    </div>
                    <div className={styles.serviceText}>
                        <p className={styles.serviceDescLarge}>
                            {t('scanner_intraoral.content.description')}
                        </p>
                    </div>
                </div>

                {/* Advantages Section */}
                <div className={styles.serviceAdvantages}>
                    <h3 className={styles.advantagesTitle}>{t('scanner_intraoral.advantages.title')}</h3>
                    
                    <ul className={styles.advantagesList}>
                        <li>
                            <img src="/icons/service_green_check.svg" alt="check" /> 
                            {t('scanner_intraoral.advantages_items.item1')}
                        </li>
                        <li>
                            <img src="/icons/service_green_check.svg" alt="check" /> 
                            {t('scanner_intraoral.advantages_items.item2')}
                        </li>
                        <li>
                            <img src="/icons/service_green_check.svg" alt="check" /> 
                            {t('scanner_intraoral.advantages_items.item3')}
                        </li>
                        <li>
                            <img src="/icons/service_green_check.svg" alt="check" /> 
                            {t('scanner_intraoral.advantages_items.item4')}
                        </li>
                        <li>
                            <img src="/icons/service_green_check.svg" alt="check" /> 
                            {t('scanner_intraoral.advantages_items.item5')}
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default ScannerIntraoral;