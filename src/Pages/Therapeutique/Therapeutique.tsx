import React from 'react';
import Style from './Therapeutique.module.css';

import { useTranslation } from 'react-i18next';

import SectionTitle from '../../components/SectionTitle/SectionTitle.js';

import VideoExperience from '../../components/VideoExperience/VideoExperience.js';

import TraitementsEndoimg1 from '../../assets/images/services/Therapeutique/img1.webp';
import TraitementsEndoimg2 from '../../assets/images/services/Therapeutique/img2.webp';
import TraitementsEndoimg3 from '../../assets/images/services/Therapeutique/img3.webp';

const Therapeutique = () => {
  const { t } = useTranslation();

  const anomaliesItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

  return (
    <div className={Style.container}>

      <VideoExperience />
      
      {/* 1. Collage résine Composite */}
      <SectionTitle 
        title={t('Therapeutique.Collage.title')} 
        description={t('Therapeutique.Collage.subtitle')} 
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('Therapeutique.Collage.description')}
      </p>
      <img className={Style.image_big} src={TraitementsEndoimg1} alt={t('Therapeutique.Collage.title')} />
      <div className={Style.images_container}>
        <img src={TraitementsEndoimg2} alt={t('Therapeutique.Collage.title')} />
        <img src={TraitementsEndoimg3} alt={t('Therapeutique.Collage.title')} />
      </div>

      {/* 2. Traitements Endodontiques */}
      <SectionTitle 
        title={t('Therapeutique.TraitementsEndodontiques.title')} 
        description={t('Therapeutique.TraitementsEndodontiques.subtitle')}
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('Therapeutique.TraitementsEndodontiques.description')}
      </p>
      <img className={Style.image_big} src={TraitementsEndoimg1} alt={t('Therapeutique.TraitementsEndodontiques.title')} />
      <div className={Style.images_container}>
        <img src={TraitementsEndoimg2} alt={t('Therapeutique.TraitementsEndodontiques.title')} />
        <img src={TraitementsEndoimg3} alt={t('Therapeutique.TraitementsEndodontiques.title')} />
      </div>

      {/* 3. Extraction */}
      <SectionTitle 
        title={t('Therapeutique.Extraction.title')} 
        description={t('Therapeutique.Extraction.subtitle')} 
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('Therapeutique.Extraction.description')}
      </p>
      <img className={Style.image_big} src={TraitementsEndoimg1} alt={t('Therapeutique.Extraction.title')} />
      <div className={Style.images_container}>
        <img src={TraitementsEndoimg2} alt={t('Therapeutique.Extraction.title')} />
        <img src={TraitementsEndoimg3} alt={t('Therapeutique.Extraction.title')} />
      </div>

      {/* 4. La Chirurgie Implantaire */}
      <SectionTitle 
        title={t('Therapeutique.ChirurgieImplantaire.title')} 
        description={t('Therapeutique.ChirurgieImplantaire.subtitle')} 
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('Therapeutique.ChirurgieImplantaire.description')}
      </p>
      <img className={Style.image_big} src={TraitementsEndoimg1} alt={t('Therapeutique.ChirurgieImplantaire.title')} />
      <div className={Style.images_container}>
        <img src={TraitementsEndoimg2} alt={t('Therapeutique.ChirurgieImplantaire.title')} />
        <img src={TraitementsEndoimg3} alt={t('Therapeutique.ChirurgieImplantaire.title')} />
      </div>

      {/* 5. Traitements des anomalies */}
      <SectionTitle 
        title={t('Therapeutique.Traitementsanomalies\u00a0.title')} 
        description={t('Therapeutique.Traitementsanomalies\u00a0.subtitle')} 
        buttonText="" href=""
      />
      <div className={Style.description}>
        <ul style={{ paddingLeft: '20px', margin: '0 0 50px 0' }}>
          {anomaliesItems.map((item) => (
            <li key={item}>{t(`Therapeutique.Traitementsanomalies\u00a0.items.${item}`)}</li>
          ))}
        </ul>
      </div>
      <img className={Style.image_big} src={TraitementsEndoimg1} alt={t('Therapeutique.Traitementsanomalies\u00a0.title')} />
      <div className={Style.images_container}>
        <img src={TraitementsEndoimg2} alt={t('Therapeutique.Traitementsanomalies\u00a0.title')} />
        <img src={TraitementsEndoimg3} alt={t('Therapeutique.Traitementsanomalies\u00a0.title')} />
      </div>

    </div>
  );
};

export default Therapeutique;