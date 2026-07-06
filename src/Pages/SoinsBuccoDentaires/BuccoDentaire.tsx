
import Style from './BuccoDentaire.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle.js';
import { useTranslation } from 'react-i18next';

import VideoExperience from '../../components/VideoExperience/VideoExperience.js';

// Examens réguliers

import examens_image_1 from '../../assets/images/soins bucco dentaire et prévntif/Examens réguliers/examens_image_1.webp';
import examens_image_2 from '../../assets/images/soins bucco dentaire et prévntif/Examens réguliers/examens_image_2.webp';
import examens_image_3 from '../../assets/images/soins bucco dentaire et prévntif/Examens réguliers/examens_image_3.webp';

// Soins préventifs

import soins_image_1 from '../../assets/images/soins bucco dentaire et prévntif/Soins Préventifs/soins_image_1.webp';
import soins_image_2 from '../../assets/images/soins bucco dentaire et prévntif/Soins Préventifs/soins_image_2.webp';
import soins_image_3 from '../../assets/images/soins bucco dentaire et prévntif/Soins Préventifs/soins_image_3.webp';



const BuccoDentaire = () => {
  const { t } = useTranslation();

  return (
    <div className={`${Style.container} ${Style.section_container}`}>

      <VideoExperience />

      
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
    </div>
      
  );
};

export default BuccoDentaire;