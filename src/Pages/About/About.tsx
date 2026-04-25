import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import doctorImage from '../../assets/images/about_page/about_sarra_image.webp';

import img1 from '../../assets/images/about_page/about_gallery_image_1.webp';
import img2 from '../../assets/images/about_page/about_gallery_image_2.webp';
import img3 from '../../assets/images/about_page/about_gallery_image_3.webp';
import img4 from '../../assets/images/about_page/about_gallery_image_4.webp';
import FinalCTA from '../../components/FinalCTA/FinalCTA';
import ScheduleSection from '../../components/ScheduleSection/ScheduleSection';



const About = () => {
  const { t } = useTranslation();


  const galleryImages = [
    { id: 1, src: img1, alt: "Gallery Image 1" },
    { id: 2, src: img2, alt: "Gallery Image 2" },
    { id: 3, src: img3, alt: "Gallery Image 3" },
    { id: 4, src: img4, alt: "Gallery Image 4" },
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

      
    <ScheduleSection isAltBg={false} />

        
    <FinalCTA />

    </div>
  );
};

export default About;