import React from 'react';
import Style from './Prothesesdentaires.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle.js';
import { useTranslation } from 'react-i18next';

import VideoExperience from '../../components/VideoExperience/VideoExperience.js';

import facetimage_big from '../../assets/images/services/service1/facetimage_big.jpg';
import facetimage1 from '../../assets/images/services/service1/facetimage1.jpg';
import facetimage2 from '../../assets/images/services/service1/facetimage2.jpg';

const Prothesesdentaires = () => {
  const { t } = useTranslation();

  // Helper arrays lil items mta3 Prothèses Fixes
  const fixesItems = ['item1', 'item2', 'item3'];

  return (
    <div className={Style.container}>

      <VideoExperience />
      
      {/* 1. Prothèses Fixes */}
      <SectionTitle 
        title={t('Prothesesdentaires.ProthèsesFixes.title')} 
        description={t('Prothesesdentaires.ProthèsesFixes.subtitle')} 
        buttonText="" href=""
      />
      <div className={Style.description}>
        <ul style={{ paddingLeft: '20px', margin: '0 0 50px 0' }}>
          {fixesItems.map((item) => (
            <li key={item}>{t(`Prothesesdentaires.ProthèsesFixes.items.${item}`)}</li>
          ))}
        </ul>
      </div>
      <img className={Style.image_big} src={facetimage_big} alt={t('Prothesesdentaires.ProthèsesFixes.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('Prothesesdentaires.ProthèsesFixes.title')} />
        <img src={facetimage2} alt={t('Prothesesdentaires.ProthèsesFixes.title')} />
      </div>

      {/* 2. Prothèses Amovibles */}
      <SectionTitle 
        title={t('Prothesesdentaires.ProthèsesAmovibles.title')} 
        description={t('Prothesesdentaires.ProthèsesAmovibles.subtitle')}
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('Prothesesdentaires.ProthèsesAmovibles.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('Prothesesdentaires.ProthèsesAmovibles.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('Prothesesdentaires.ProthèsesAmovibles.title')} />
        <img src={facetimage2} alt={t('Prothesesdentaires.ProthèsesAmovibles.title')} />
      </div>

      {/* 3. Facettes Dentaires */}
      <SectionTitle 
        title={t('Prothesesdentaires.FacettesDentaires.title')} 
        description={t('Prothesesdentaires.FacettesDentaires.subtitle')}
        buttonText="" href=""
      />
      <p className={Style.description}>
        {t('Prothesesdentaires.FacettesDentaires.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('Prothesesdentaires.FacettesDentaires.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('Prothesesdentaires.FacettesDentaires.title')} />
        <img src={facetimage2} alt={t('Prothesesdentaires.FacettesDentaires.title')} />
      </div>

    </div>
  );
};

export default Prothesesdentaires;