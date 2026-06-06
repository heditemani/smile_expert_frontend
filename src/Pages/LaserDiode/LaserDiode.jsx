import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LaserDiode.module.css';
import dentalChairImg from '../../assets/images/general/dental_chair_1773460614969.png';
import VideoExperience from '../../components/VideoExperience/VideoExperience';

const LaserDiode = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.serviceDetails}>
            <VideoExperience />
        <div className="container">
            
            <div className={styles.serviceDetailsHeader}>
            <h2 className={styles.serviceDetailsTitle}>{t('laser.hero.title')}</h2>
            <p className={styles.serviceDetailsSubtitle}>{t('laser.hero.subtitle')}</p>
            </div>

            <div className={styles.serviceDetailsContent}>
            <div className={styles.serviceImage}>
                <img src={dentalChairImg} alt="Laser Diode Service" />
            </div>
            <div className={styles.serviceText}>
                <p className={styles.serviceDescLarge}>
                {t('laser.content.description')}
                </p>
            </div>
            </div>

            <div className={styles.serviceAdvantages}>
            <h3 className={styles.advantagesTitle}>{t('laser.advantages.title')}</h3>
            
            <ul className={styles.advantagesList}>
                <li><img src="/icons/service_green_check.svg" alt="" /> {t('laser.advantages_items.item1')}</li>
                <li><img src="/icons/service_green_check.svg" alt="" /> {t('laser.advantages_items.item2')}</li>
                <li><img src="/icons/service_green_check.svg" alt="" /> {t('laser.advantages_items.item3')}</li>
                <li><img src="/icons/service_green_check.svg" alt="" /> {t('laser.advantages_items.item4')}</li>
            </ul>
            </div>

        </div>
        </section>
    );
};

export default LaserDiode;