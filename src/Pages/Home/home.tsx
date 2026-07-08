import { useTranslation } from 'react-i18next';

import styles from './home.module.css';

import heroBg from '../../assets/homepagebanner.png';

import ScheduleSection from '../../components/ScheduleSection/ScheduleSection';

import CtaBanner from '../../components/CTAsection/CTA';
import SectionTitle from '../../components/SectionTitle/SectionTitle.js';
import ServiceCard from '../../components/CardService/ServiceCard.js';

import service1 from '../../assets/images/general/service_1_indexpage.jpg';
import service2 from '../../assets/images/general/service_2_indexpage.jpg';
import service3 from '../../assets/images/general/service_3_indexpage.jpg';

import VideoExperience from '../../components/VideoExperience/VideoExperience.js';

import consultationImg from '../../assets/images/general/consultation_image.jpg';
import receptionImg from '../../assets/images/general/reception.png';

const Homepage = () => {
  const { t } = useTranslation();

  const servicesData = [
  {
    bgImage: service1,
    title: t('home.services.service1.title'),
    description: t('home.services.service1.description'),
    link: "/services/soins-bucco-dentaires"
  },
  {
    bgImage: service2,
    title: t('home.services.service2.title'),
    description: t('home.services.service2.description'),
    link: "/services/soins-bucco-dentaires"
  },
  {
    bgImage: service3,
    title: t('home.services.service3.title'),
    description: t('home.services.service3.description'),
    link: "/services/therapeutique"
  }
];

  return (
    <>

      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          
          <div className={styles.heroContent}>
            <p className={styles.heroSubtitle}>{t('home.hero.subtitle')}</p>
            <h1 className={styles.heroTitle}>
              <span className={styles.highlight}>{t('home.hero.titleHighlight')}</span> {t('home.hero.titlePart1')}<br />
              <span>{t('home.hero.titlePart2')}</span>
            </h1>
            <p className={styles.heroDescription}>
              {t('home.hero.description')}
            </p>
            <a href="https://www.med.tn/medecin/dentiste/nabeul/dr-sarra-haouet-164499.html" target="_blank" rel="noreferrer" className="btn btn-primary btn-large">
              {t('home.hero.button')}
            </a>
          </div>

          <div className={styles.heroImageWrapper}>
            <img 
              src={heroBg} 
              alt="Dr Sarra Haouet Cabinet" 
              className={styles.heroImage}
            />
          </div>

        </div>
      </section>
      
      
      <div className={` ${styles.services_section} container`}>

        <SectionTitle 
          title={t('home.sectionTitle.title')}
          description={t('home.sectionTitle.desc')}
          buttonText={t('home.sectionTitle.button')}
          href="/services"
        />

        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              bgImage={service.bgImage}
              icon="/icons/teeth.svg" 
              title={service.title}
              description={service.description}
              Link={service.link}
              isFirst={index === 0} 
            />
          ))}
        </div>
      </div>

      <section className="section-padding container mt">
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

      <VideoExperience  />

      <ScheduleSection isAltBg={false} />


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

            {/* El Map Container mragal b Zoom a9wa 50% */}
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1127.61206929441!2d10.6915595!3d36.4348777!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x130298c96939a449%3A0xe8edae1e7360dd5b!2sDentiste%20-%20Dr%20Sarra%20Haouet%20Nabeul%20Mrezga%20Hammamet!5e0!3m2!1sfr!2stn!4v1780717038232!5m2!1sfr!2stn"
                    className={styles.googleMap}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cabinet Dentaire Location"
                ></iframe>
            </div>
        </div>
    </section>

      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.testimonialsWrapper}>
            <div className={styles.testimonialsHeader}>
              <h2 className={styles.sectionTitle} style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
                {t('home.testimonials.title')}
              </h2>
              <p className={styles.sectionSubtitle} style={{ marginTop: '1rem' }}>
                {t('home.testimonials.subtitle')}
              </p>
            </div>

            <div className={styles.reviewsList}>
              {[1, 2, 3].map((num) => (
                <div key={num} className={styles.reviewCard}>
                  <div className={styles.reviewHead}>
                    <div className={styles.reviewUser}>
                      <div className={styles.avatar}></div>
                      <h4>{t(`home.testimonials.reviews.r${num}.name`)}</h4>
                    </div>
                    <div className={styles.stars}>★★★★★</div>
                  </div>
                  <p className={styles.reviewText}>
                    {t(`home.testimonials.reviews.r${num}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Homepage;