import React from 'react';
import Style from './Prothesesdentaires.module.css';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useTranslation } from 'react-i18next';

import facetimage_big from '../../assets/images/services/service1/facetimage_big.jpg';
import facetimage1 from '../../assets/images/services/service1/facetimage1.jpg';
import facetimage2 from '../../assets/images/services/service1/facetimage2.jpg';

const Prothesesdentaires = () => {
  const { t } = useTranslation();

  return (
    <div className={Style.container}>
      {/* 1. Facettes */}
      <SectionTitle 
        title={t('buccoDentaire.facettes.title')} 
        description={t('buccoDentaire.facettes.subtitle')} 
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