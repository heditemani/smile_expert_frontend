import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import doctorImage from '../../assets/images/about_page/about_sarra_image.webp';

import img1 from '../../assets/images/about_page/about_gallery_image_1.webp';
import img2 from '../../assets/images/about_page/about_gallery_image_2.webp';
import img3 from '../../assets/images/about_page/about_gallery_image_3.webp';
import img4 from '../../assets/images/about_page/about_gallery_image_4.webp';


import techImg1 from '../../assets/images/about_page/technologie_image_1.webp';
import techImg2 from '../../assets/images/about_page/technologie_image_2.webp';
import techImg3 from '../../assets/images/about_page/technologie_image_1.webp';

import expertiseImg from '../../assets/images/about_page/expertise_image.webp';

import ScheduleSection from '../../components/ScheduleSection/ScheduleSection';
import CtaSplit from '../../components/CTASplit/CtaSplit';



const About = () => {
  const { t } = useTranslation();


  const galleryImages = [
    { id: 1, src: img1, alt: "Gallery Image 1" },
    { id: 2, src: img2, alt: "Gallery Image 2" },
    { id: 3, src: img3, alt: "Gallery Image 3" },
    { id: 4, src: img4, alt: "Gallery Image 4" },
  ];


  const technologies = [
    {
      id: 1,
      image: techImg1,
      key: 'laserDiode',
      link: '/laser-diode'
    },
    {
      id: 2,
      image: techImg2,
      key: 'scannerIntraoral',
      link: '/scanner-intraoral'
    },
    {
      id: 3,
      image: techImg3,
      key: 'scannerFacial',
      link: '/scanner-facial'
    }
  ];

  return (
    <div className="about-page">
      <section className={`${styles.aboutIntro} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.aboutIntroWrapper}>
            <div className={styles.aboutIntroContent}>
              <h2>{t('about.intro.title')}</h2>
              <p className={styles.introBold}>
                {t('about.intro.boldText')}
              </p>
              <p>
                {t('about.intro.expertise')}
              </p>
              <p>
                {t('about.intro.services')}
              </p>
            </div>
            <div className={styles.aboutIntroImage}>
              <img src={doctorImage} alt={t('about.intro.imgAlt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`${styles.gallery} ${styles.sectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.galleryGrid}>
            {galleryImages.map((image) => (
              <div key={image.id} className={styles.galleryItem}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>


    <CtaSplit />
      
    <ScheduleSection isAltBg={true} />

    {/* Technologies Section */}
    <section className={`${styles.technologies} ${styles.sectionPadding}`}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <div className={styles.techWrapper}>
            <h2 className={styles.sectionTitle} style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              {t('about.tech.sectionTitle')}
            </h2>
            <div className={styles.techGrid}>
              {technologies.map((tech) => (
                <div key={tech.id} className={styles.techCard}>
                  <div className={styles.techImageWrapper}>
                    <img src={tech.image} alt={t(`about.tech.items.${tech.key}.name`)} />
                  </div>
                  <div className={styles.techOverlay}>
                    {t(`about.tech.items.${tech.key}.name`)}
                  </div>
                  <a href={tech.link} className={styles.techHoverLink}>
                    {t('about.tech.learnMore')} 
                    <img src="/icons/technoligie_icon_learn_more.svg" alt={t('about.tech.learnMore')} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className={styles.expertiseSection} style={{ backgroundColor: 'var(--bg-offwhite)' }}>
        <div className={styles.container}>
          <h2 className={`section-title mb-4`}>{t('about.expertise.sectionTitle')}</h2>
          <div className={styles.expertiseWrapper}>
            <div className={styles.expertiseContent}>
              <h3>{t('about.expertise.doctorName')}</h3>
              <p className={styles.expertiseRole}>
                {t('about.expertise.description')}
              </p>
            </div>
            <div className={styles.expertiseImage}>
              <img src={expertiseImg} alt={t('about.expertise.doctorName')} />
            </div>
          </div>
        </div>
      </section>


    

        
    

    </div>
  );
};

export default About;