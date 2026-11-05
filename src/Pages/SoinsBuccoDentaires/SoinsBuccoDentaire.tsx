import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import Style from './BuccoDentaire.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import VideoExperience from '../../components/VideoExperience/VideoExperience';

// Examens réguliers
import examens_image_1 from '../../assets/images/soins bucco dentaire et prévntif/Examens réguliers/examens_image_1.webp';
import examens_image_2 from '../../assets/images/soins bucco dentaire et prévntif/Examens réguliers/examens_image_2.webp';
import examens_image_3 from '../../assets/images/soins bucco dentaire et prévntif/Examens réguliers/examens_image_3.webp';

// Soins préventifs
import soins_image_1 from '../../assets/images/soins bucco dentaire et prévntif/Soins Préventifs/soins_image_1.webp';
import soins_image_2 from '../../assets/images/soins bucco dentaire et prévntif/Soins Préventifs/soins_image_2.webp';
import soins_image_3 from '../../assets/images/soins bucco dentaire et prévntif/Soins Préventifs/soins_image_3.webp';

export const SoinsBuccoDentaires = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  return (
    <div className={`${Style.container} ${Style.section_container}`}>
      <VideoExperience />

      {/* 1. Examens réguliers */}
      <section id="examens-reguliers">
        <SectionTitle 
          title={t('SoinsbuccoDentaire.Examensreguliers.title')} 
          description={t('SoinsbuccoDentaire.Examensreguliers.subtitle')} 
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('SoinsbuccoDentaire.Examensreguliers.description')}
        </p>
        <img className={Style.image_big} src={examens_image_1} alt={t('SoinsbuccoDentaire.Examensreguliers.title')} />
        <div className={Style.images_container}>
          <img src={examens_image_2} alt={t('SoinsbuccoDentaire.Examensreguliers.title')} />
          <img src={examens_image_3} alt={t('SoinsbuccoDentaire.Examensreguliers.title')} />
        </div>
      </section>

      {/* 2. Soins préventifs */}
      <section id="soins-preventifs">
        <SectionTitle 
          title={t('SoinsbuccoDentaire.SoinsPreventifs.title')} 
          description={t('SoinsbuccoDentaire.SoinsPreventifs.subtitle')} 
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('SoinsbuccoDentaire.SoinsPreventifs.description')}
        </p>
        <img className={Style.image_big} src={soins_image_1} alt={t('SoinsbuccoDentaire.SoinsPreventifs.title')} />
        <div className={Style.images_container}>
          <img src={soins_image_2} alt={t('SoinsbuccoDentaire.SoinsPreventifs.title')} />
          <img src={soins_image_3} alt={t('SoinsbuccoDentaire.SoinsPreventifs.title')} />
        </div>
      </section>

      <section id="detartrage">
        <SectionTitle
          title={t('SoinsbuccoDentaire.Detartrage.title')}
          description={t('SoinsbuccoDentaire.Detartrage.subtitle')}
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('SoinsbuccoDentaire.Detartrage.description')}
        </p>
        <img className={Style.image_big} src={soins_image_1} alt={t('SoinsbuccoDentaire.Detartrage.title')} />
        <div className={Style.images_container}>
          <img src={soins_image_2} alt={t('SoinsbuccoDentaire.Detartrage.title')} />
          <img src={soins_image_3} alt={t('SoinsbuccoDentaire.Detartrage.title')} />
        </div>
      </section>

      <section id="decontamination-gingivale">
        <SectionTitle
          title={t('SoinsbuccoDentaire.DecontaminationGingivale.title')}
          description={t('SoinsbuccoDentaire.DecontaminationGingivale.subtitle')}
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('SoinsbuccoDentaire.DecontaminationGingivale.description')}
        </p>
        <img className={Style.image_big} src={soins_image_1} alt={t('SoinsbuccoDentaire.DecontaminationGingivale.title')} />
        <div className={Style.images_container}>
          <img src={soins_image_2} alt={t('SoinsbuccoDentaire.DecontaminationGingivale.title')} />
          <img src={soins_image_3} alt={t('SoinsbuccoDentaire.DecontaminationGingivale.title')} />
        </div>
      </section>

      <section id="aligneurs">
        <SectionTitle
          title={t('SoinsbuccoDentaire.aligneurs.title')}
          description={t('SoinsbuccoDentaire.aligneurs.subtitle')}
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('SoinsbuccoDentaire.aligneurs.description')}
        </p>
        <img className={Style.image_big} src={examens_image_1} alt={t('SoinsbuccoDentaire.aligneurs.title')} />
        <div className={Style.images_container}>
          <img src={examens_image_2} alt={t('SoinsbuccoDentaire.aligneurs.title')} />
          <img src={examens_image_3} alt={t('SoinsbuccoDentaire.aligneurs.title')} />
        </div>
      </section>

      <section id="interception-enfants">
        <SectionTitle
          title={t('SoinsbuccoDentaire.InterceptionEnfant.title')}
          description={t('SoinsbuccoDentaire.InterceptionEnfant.subtitle')}
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('SoinsbuccoDentaire.InterceptionEnfant.description')}
        </p>
        <img className={Style.image_big} src={examens_image_2} alt={t('SoinsbuccoDentaire.InterceptionEnfant.title')} />
        <div className={Style.images_container}>
          <img src={examens_image_1} alt={t('SoinsbuccoDentaire.InterceptionEnfant.title')} />
          <img src={examens_image_3} alt={t('SoinsbuccoDentaire.InterceptionEnfant.title')} />
        </div>
      </section>
    </div>
  );
};

export default SoinsBuccoDentaires;