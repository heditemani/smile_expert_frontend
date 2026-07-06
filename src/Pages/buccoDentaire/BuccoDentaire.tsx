import React from 'react';
import { useTranslation } from 'react-i18next';

import Style from './BuccoDentaire.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle.js';

import VideoExperience from '../../components/VideoExperience/VideoExperience.js';

import facetimage_big from '../../assets/images/services/bucco/facette/img3.webp';
import facetimage1 from '../../assets/images/services/bucco/facette/img2.webp';
import facetimage2 from '../../assets/images/services/bucco/facette/img1.webp';


const BuccoDentaire = () => {
  const { t } = useTranslation();

  return (
    <div className={Style.container}>

      <VideoExperience />

      {/* 1. Facettes */}
      <SectionTitle 
        title={t('buccoDentaire.facettes.title')} 
        description={t('buccoDentaire.facettes.subtitle')}
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('buccoDentaire.facettes.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('buccoDentaire.facettes.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('buccoDentaire.facettes.title')} />
        <img src={facetimage2} alt={t('buccoDentaire.facettes.title')} />
      </div>

      {/* 2. Blanchiment des dents par LASER DIODE */}
      <SectionTitle 
        title={t('buccoDentaire.blanchiment.title')} 
        description={t('buccoDentaire.blanchiment.subtitle')}
        buttonText="" href="" 
      />
      <p className={Style.description}>
        {t('buccoDentaire.blanchiment.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('buccoDentaire.blanchiment.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('buccoDentaire.blanchiment.title')} />
        <img src={facetimage2} alt={t('buccoDentaire.blanchiment.title')} />
      </div>

      {/* 3. Alignement gingival au laser diode */}
      <SectionTitle 
        title={t('buccoDentaire.alignement.title')} 
        description={t('buccoDentaire.alignement.subtitle')}
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('buccoDentaire.alignement.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('buccoDentaire.alignement.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('buccoDentaire.alignement.title')} />
        <img src={facetimage2} alt={t('buccoDentaire.alignement.title')} />
      </div>

      {/* 4. Traitement de l’hyperpigmentation gingivale par laser */}
      <SectionTitle 
        title={t('buccoDentaire.hyperpigmentation.title')} 
        description={t('buccoDentaire.hyperpigmentation.subtitle')}
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('buccoDentaire.hyperpigmentation.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('buccoDentaire.hyperpigmentation.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('buccoDentaire.hyperpigmentation.title')} />
        <img src={facetimage2} alt={t('buccoDentaire.hyperpigmentation.title')} />
      </div>
    </div>
  );
};

export default BuccoDentaire;