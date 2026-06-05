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
        <SectionTitle />
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
      <CtaBanner />
    </>
  );
};

export default Homepage;