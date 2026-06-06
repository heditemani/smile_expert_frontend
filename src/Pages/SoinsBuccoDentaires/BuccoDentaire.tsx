
import Style from './BuccoDentaire.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle.js';
import { useTranslation } from 'react-i18next';

import VideoExperience from '../../components/VideoExperience/VideoExperience.js';

import facetimage_big from '../../assets/images/services/service1/facetimage_big.jpg';
import facetimage1 from '../../assets/images/services/service1/facetimage1.jpg';
import facetimage2 from '../../assets/images/services/service1/facetimage2.jpg';

const BuccoDentaire = () => {
  const { t } = useTranslation();

  return (
    <div className={Style.container}>

      <VideoExperience />

      
      <SectionTitle 
        title={t('SoinsbuccoDentaire.Examensreguliers.title')} 
        description={t('SoinsbuccoDentaire.Examensreguliers.subtitle')} 
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('SoinsbuccoDentaire.Examensreguliers.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('SoinsbuccoDentaire.Examensreguliers.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('SoinsbuccoDentaire.Examensreguliers.title')} />
        <img src={facetimage2} alt={t('SoinsbuccoDentaire.Examensreguliers.title')} />
      </div>

      <SectionTitle 
        title={t('SoinsbuccoDentaire.SoinsPreventifs.title')} 
        description={t('SoinsbuccoDentaire.SoinsPreventifs.subtitle')} 
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('SoinsbuccoDentaire.SoinsPreventifs.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('SoinsbuccoDentaire.SoinsPreventifs.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('SoinsbuccoDentaire.SoinsPreventifs.title')} />
        <img src={facetimage2} alt={t('SoinsbuccoDentaire.SoinsPreventifs.title')} />
      </div>
    </div>
      
  );
};

export default BuccoDentaire;