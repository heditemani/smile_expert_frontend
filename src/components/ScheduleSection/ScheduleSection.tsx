import React from 'react';
import styles from './ScheduleSection.module.css';
import { useTranslation } from 'react-i18next';
import scheduleImg from '../../assets/images/schedulesection/schedule1.webp';

const ScheduleSection = () => {
  const { t } = useTranslation();

  const scheduleData = [
    { day: t('days.monday'), time: "09:00 AM - 03:00 PM" },
    { day: t('days.tuesday'), time: "09:00 AM - 03:00 PM" },
    { day: t('days.wednesday'), time: "09:00 AM - 03:00 PM" },
    { day: t('days.thursday'), time: "09:00 AM - 03:00 PM" },
    { day: t('days.friday'), time: "09:00 AM - 03:00 PM" },
    { day: t('days.saturday'), time: "09:00 AM - 01:00 PM" },
    { day: t('days.sunday'), time: t('common.closed'), isClosed: true },
  ];

  return (
    <section className={`${styles.schedule} section-padding`}>
      <div className="container">
        <div className={styles.scheduleWrapper}>
          
          <div className={styles.scheduleContent}>
            <h2 className="section-title">{t('contact.schedule_title')}</h2>
            <p className="section-subtitle mb-4">
              {t('contact.schedule_subtitle')}
            </p>

            <div className={styles.scheduleImage}>
              <img 
                src={scheduleImg} 
                alt="Clinic Reception"
              />
            </div>
          </div>

          <div className={styles.scheduleTable}>
            {scheduleData.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.scheduleRow} ${item.isClosed ? styles.closed : ''}`}
              >
                <span>{item.day}</span>
                <span>{item.time}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;