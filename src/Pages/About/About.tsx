import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import doctorImage from '../../assets/images/about_page/about_sarra_image.webp';

const About = () => {
  const { t } = useTranslation();

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

      {/* Houni tnajjem tzid el sections el okhrin ba3d */}
    </div>
  );
};

export default About;