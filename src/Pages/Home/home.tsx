import { useTranslation } from 'react-i18next';

import styles from './home.module.css';
import SecondBanner from '../../components/SecondBanner/SecondBanner';
import ScheduleSection from '../../components/ScheduleSection/ScheduleSection';
import bannerImg from '../../assets/images/contact_page/contact_banner1.webp';
import CtaBanner from '../../components/CTAsection/CTA';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import ServiceCard from '../../components/CardService/ServiceCard.jsx';
import service1 from '../../assets/images/general/service_1_indexpage.jpg';
import service2 from '../../assets/images/general/service_2_indexpage.jpg';
import service3 from '../../assets/images/general/service_3_indexpage.jpg';

// Consultation image
import consultationImg from '../../assets/images/general/consultation_image.jpg';

import receptionImg from '../../assets/images/general/reception.png';

import mapPlaceholder from '../../assets/images/general/map_placeholder.png';

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SecondBanner 
        slides={[bannerImg, bannerImg, bannerImg]}
        title={t('contact_hero.title')}
        subtitle={t('contact_hero.subtitle')}
        buttonText={t('contact_hero.button')}
      />
      
      <div className="container">

        <SectionTitle 
          title={t('home.sectionTitle.title')}
          description={t('home.sectionTitle.desc')}
          buttonText={t('home.sectionTitle.button')}
          href="/services"
        />

        <div className={styles.servicesGrid}>
          <ServiceCard 
            bgImage={service1}
            icon="/icons/teeth.svg"
            title={t('home.services.service1.title')}
            description={t('home.services.service1.description')}
          />
          <ServiceCard 
            bgImage={service2}
            icon="/icons/teeth.svg"
            title={t('home.services.service2.title')}
            description={t('home.services.service2.description')}
          />
          <ServiceCard 
            bgImage={service3}
            icon="/icons/teeth.svg"
            title={t('home.services.service3.title')}
            description={t('home.services.service3.description')}
          />
        </div>
      </div>

      <section className="section-padding">
        <div className={styles.stcontainer}>
          <div className={styles.consultation_wrapper}>
            <div className={styles.consultation_image}>
              <img 
                src={consultationImg} 
                alt="Dentist Consulting"
                style={{ aspectRatio: '1/1', objectFit: 'cover', borderRadius: '1rem 0 0 1rem' }}
              />
            </div>
            <div className={styles.consultation_content}>
              <h2>{t('home.consultation.title')}</h2>
              <p>{t('home.consultation.description')}</p>
              <a href="/contact" className="btn btn-white">{t('home.consultation.button')}</a>
            </div>
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.videoSection}`}>
        <h2 className={styles.videoSectionTitle}>{t('home.video.title')}</h2>
      </section>

      <ScheduleSection isAltBg={true} />


      <section className={styles.howItWorks}>
        <div className="container">
          <div className={styles.hiwWrapper}>
            <div className={styles.hiwContent}>
              <h2 className={styles.sectionTitle}>{t('home.hiw.title')}</h2>
              <p className={`${styles.sectionSubtitle} mb-4`}>{t('home.hiw.subtitle')}</p>

              <div className={styles.hiwSteps}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>01</span>
                  <span className={styles.stepText}>{t('home.hiw.step1')}</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>02</span>
                  <span className={styles.stepText}>{t('home.hiw.step2')}</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>03</span>
                  <span className={styles.stepText}>{t('home.hiw.step3')}</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>04</span>
                  <span className={styles.stepText}>{t('home.hiw.step4')}</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNum}>05</span>
                  <span className={styles.stepText}>{t('home.hiw.step5')}</span>
                </div>
              </div>
            </div>
            
            <div className={styles.hiwImage}>
              <img 
                src={receptionImg} 
                alt="Dentist working"
                style={{ borderRadius: 'var(--border-radius-md)', objectFit: 'cover', aspectRatio: '4/3', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />

      <section className={styles.locations}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{t('home.locations.title')}</h2>
          <p className={`${styles.sectionSubtitle} mb-4`}>{t('home.locations.subtitle')}</p>

          <div className={styles.mapContainer}>
            <img 
              src={mapPlaceholder} 
              alt="Map Location"
              style={{ width: '100%', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)', aspectRatio: '16/9', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Homepage;