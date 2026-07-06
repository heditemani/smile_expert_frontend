import React from 'react';
import { useTranslation } from 'react-i18next';

import Style from './BuccoDentaire.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle.js';

import VideoExperience from '../../components/VideoExperience/VideoExperience.js';

// Alignement gingival au laser diode

import facette_image_1 from '../../assets/images/traitement bucco-dentaire/facettes/facette_image_1.webp';
import facette_image_2 from '../../assets/images/traitement bucco-dentaire/facettes/facette_image_2.webp';
import facette_image_3 from '../../assets/images/traitement bucco-dentaire/facettes/facette_image_3.webp';

// Blanchiment des dents par LASER DIODE

import blanchiment_image_1 from '../../assets/images/traitement bucco-dentaire/Blanchiment des dents par LASER DIODE/blanchiment_image_1.webp';
import blanchiment_image_2 from '../../assets/images/traitement bucco-dentaire/Blanchiment des dents par LASER DIODE/blanchiment_image_2.webp';
import blanchiment_image_3 from '../../assets/images/traitement bucco-dentaire/Blanchiment des dents par LASER DIODE/blanchiment_image_3.webp';

// Alignement gingival au laser diode

import alignement_image_1 from '../../assets/images/traitement bucco-dentaire/Alignement gingival au laser diode/alignement_image_1.webp';
import alignement_image_2 from '../../assets/images/traitement bucco-dentaire/Alignement gingival au laser diode/alignement_image_2.webp';
import alignement_image_3 from '../../assets/images/traitement bucco-dentaire/Alignement gingival au laser diode/alignement_image_3.webp';

// Traitement de l’hyperpigmentation gingivale par laser

import traitement_image_1 from '../../assets/images/traitement bucco-dentaire/Traitement de l’hyperpigmentation gingivale par laser/traitement_image_1.webp';
import traitement_image_2 from '../../assets/images/traitement bucco-dentaire/Traitement de l’hyperpigmentation gingivale par laser/traitement_image_2.webp';
import traitement_image_3 from '../../assets/images/traitement bucco-dentaire/Traitement de l’hyperpigmentation gingivale par laser/traitement_image_3.webp';



const BuccoDentaire = () => {
  const { t } = useTranslation();

  return (
    <div className={`${Style.container} ${Style.section_container}`}>

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
      <img className={Style.image_big} src={facette_image_1} alt={t('buccoDentaire.facettes.title')} />
      <div className={Style.images_container}>
        <img src={facette_image_2} alt={t('buccoDentaire.facettes.title')} />
        <img src={facette_image_3} alt={t('buccoDentaire.facettes.title')} />
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
      <img className={Style.image_big} src={blanchiment_image_1} alt={t('buccoDentaire.blanchiment.title')} />
      <div className={Style.images_container}>
        <img src={blanchiment_image_2} alt={t('buccoDentaire.blanchiment.title')} />
        <img src={blanchiment_image_3} alt={t('buccoDentaire.blanchiment.title')} />
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
      <img className={Style.image_big} src={alignement_image_1} alt={t('buccoDentaire.alignement.title')} />
      <div className={Style.images_container}>
        <img src={alignement_image_2} alt={t('buccoDentaire.alignement.title')} />
        <img src={alignement_image_3} alt={t('buccoDentaire.alignement.title')} />
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
      <img className={Style.image_big} src={traitement_image_1} alt={t('buccoDentaire.hyperpigmentation.title')} />
      <div className={Style.images_container}>
        <img src={traitement_image_2} alt={t('buccoDentaire.hyperpigmentation.title')} />
        <img src={traitement_image_3} alt={t('buccoDentaire.hyperpigmentation.title')} />
      </div>
    </div>
  );
};

export default BuccoDentaire;