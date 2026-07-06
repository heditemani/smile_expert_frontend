import React from 'react';
import Style from './Prothesesdentaires.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle.js';
import { useTranslation } from 'react-i18next';

import VideoExperience from '../../components/VideoExperience/VideoExperience.js';

// Prothèses Fixes

import prothesesfixes_image_1 from '../../assets/images/Prothèses dentaires/Prothèses Fixes/prothesesfixes_image_1.webp';
import prothesesfixes_image_2 from '../../assets/images/Prothèses dentaires/Prothèses Fixes/prothesesfixes_image_2.webp';
import prothesesfixes_image_3 from '../../assets/images/Prothèses dentaires/Prothèses Fixes/prothesesfixes_image_3.webp';


// Prothèses Amovibles

import prothesesamovibles_image_1 from '../../assets/images/Prothèses dentaires/Prothèses Amovibles/prothesesamovibles_image_1.webp';
import prothesesamovibles_image_2 from '../../assets/images/Prothèses dentaires/Prothèses Amovibles/prothesesamovibles_image_2.webp';
import prothesesamovibles_image_3 from '../../assets/images/Prothèses dentaires/Prothèses Amovibles/prothesesamovibles_image_3.webp';

// Facettes Dentaires

import facettesdentaires_image_1 from '../../assets/images/Prothèses dentaires/Facettes Dentaires/facettesdentaires_image_1.webp';
import facettesdentaires_image_2 from '../../assets/images/Prothèses dentaires/Facettes Dentaires/facettesdentaires_image_2.webp';
import facettesdentaires_image_3 from '../../assets/images/Prothèses dentaires/Facettes Dentaires/facettesdentaires_image_3.webp';

const Prothesesdentaires = () => {
  const { t } = useTranslation();

  // Helper arrays lil items mta3 Prothèses Fixes
  const fixesItems = ['item1', 'item2', 'item3'];

  return (
    <div className={`${Style.container} ${Style.section_container}`}>

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
      <img className={Style.image_big} src={prothesesfixes_image_1} alt={t('Prothesesdentaires.ProthèsesFixes.title')} />
      <div className={Style.images_container}>
        <img src={prothesesfixes_image_2} alt={t('Prothesesdentaires.ProthèsesFixes.title')} />
        <img src={prothesesfixes_image_3} alt={t('Prothesesdentaires.ProthèsesFixes.title')} />
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
      <img className={Style.image_big} src={prothesesamovibles_image_1} alt={t('Prothesesdentaires.ProthèsesAmovibles.title')} />
      <div className={Style.images_container}>
        <img src={prothesesamovibles_image_2} alt={t('Prothesesdentaires.ProthèsesAmovibles.title')} />
        <img src={prothesesamovibles_image_3} alt={t('Prothesesdentaires.ProthèsesAmovibles.title')} />
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
      <img className={Style.image_big} src={facettesdentaires_image_1} alt={t('Prothesesdentaires.FacettesDentaires.title')} />
      <div className={Style.images_container}>
        <img src={facettesdentaires_image_2} alt={t('Prothesesdentaires.FacettesDentaires.title')} />
        <img src={facettesdentaires_image_3} alt={t('Prothesesdentaires.FacettesDentaires.title')} />
      </div>

    </div>
  );
};

export default Prothesesdentaires;