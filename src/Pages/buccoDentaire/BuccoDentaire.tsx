import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import Style from './BuccoDentaire.module.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import VideoExperience from '../../components/VideoExperience/VideoExperience';

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

// Frenectomie
import frenectomie_image_1 from '../../assets/images/traitement bucco-dentaire/frenectomie/frenectomie_image_1.webp';
import frenectomie_image_2 from '../../assets/images/traitement bucco-dentaire/frenectomie/frenectomie_image_2.webp';
import frenectomie_image_3 from '../../assets/images/traitement bucco-dentaire/frenectomie/frenectomie_image_3.webp';

export const BuccoDentaire = () => {
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

      {/* 1. Blanchiment des dents par LASER DIODE */}
      <section id="blanchiment">
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
      </section>

      {/* 2. Alignement gingival au laser diode */}
      <section id="alignement-gingival">
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
      </section>

      {/* 3. Traitement de l’hyperpigmentation gingivale par laser */}
      <section id="hyperpigmentation">
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
      </section>

      {/* 4. Frénectomie */}
      <section id="frenectomie">
        <SectionTitle 
          title={t('buccoDentaire.frenectomie.title')} 
          description={t('buccoDentaire.frenectomie.subtitle')}
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('buccoDentaire.frenectomie.description')}
        </p>
        <img className={Style.image_big} src={frenectomie_image_1} alt={t('buccoDentaire.frenectomie.title')} />
        <div className={Style.images_container}>
          <img src={frenectomie_image_2} alt={t('buccoDentaire.frenectomie.title')} />
          <img src={frenectomie_image_3} alt={t('buccoDentaire.frenectomie.title')} />
        </div>
      </section>
    </div>
  );
};

export default BuccoDentaire;