import React, { useEffect } from 'react';
import Style from './Therapeutique.module.css';

import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import SectionTitle from '../../components/SectionTitle/SectionTitle.js';
import VideoExperience from '../../components/VideoExperience/VideoExperience.js';

// Collage résine Composite
import collage_image_1 from '../../assets/images/Thérapeutique et traitements endodontiques/Collage résine Composite/collage_image_1.webp';
import collage_image_2 from '../../assets/images/Thérapeutique et traitements endodontiques/Collage résine Composite/collage_image_2.webp';
import collage_image_3 from '../../assets/images/Thérapeutique et traitements endodontiques/Collage résine Composite/collage_image_3.webp';

// Le Traitements Endodontiques par Laser Diode et Obturation
import endodontiques_image_1 from '../../assets/images/Thérapeutique et traitements endodontiques/Le Traitements Endodontiques par Laser Diode et Obturation/endodontiques_image_1.webp';
import endodontiques_image_2 from '../../assets/images/Thérapeutique et traitements endodontiques/Le Traitements Endodontiques par Laser Diode et Obturation/endodontiques_image_2.webp';
import endodontiques_image_3 from '../../assets/images/Thérapeutique et traitements endodontiques/Le Traitements Endodontiques par Laser Diode et Obturation/endodontiques_image_3.webp';

// Extraction
import extraction_image_1 from '../../assets/images/Thérapeutique et traitements endodontiques/Extraction/extraction_image_1.webp';
import extraction_image_2 from '../../assets/images/Thérapeutique et traitements endodontiques/Extraction/extraction_image_2.webp';
import extraction_image_3 from '../../assets/images/Thérapeutique et traitements endodontiques/Extraction/extraction_image_3.webp';

// La Chirurgie Implantaire
import chirurgie_image_1 from '../../assets/images/Thérapeutique et traitements endodontiques/La Chirurgie Implantaire/chirurgie_image_1.webp';
import chirurgie_image_2 from '../../assets/images/Thérapeutique et traitements endodontiques/La Chirurgie Implantaire/chirurgie_image_2.webp';
import chirurgie_image_3 from '../../assets/images/Thérapeutique et traitements endodontiques/La Chirurgie Implantaire/chirurgie_image_3.webp';

// Traitements des anomalies
import anomalies_image_1 from '../../assets/images/Thérapeutique et traitements endodontiques/Traitements des anomalies/anomalies_image_1.webp';
import anomalies_image_2 from '../../assets/images/Thérapeutique et traitements endodontiques/Traitements des anomalies/anomalies_image_2.webp';
import anomalies_image_3 from '../../assets/images/Thérapeutique et traitements endodontiques/Traitements des anomalies/anomalies_image_3.webp';

const Therapeutique = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

  const anomaliesItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className={`${Style.container} ${Style.section_container}`}>

      <VideoExperience />
      
      {/* 1. Collage résine Composite */}
      <section id="collage-resine">
        <SectionTitle 
          title={t('Therapeutique.Collage.title')} 
          description={t('Therapeutique.Collage.subtitle')} 
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('Therapeutique.Collage.description')}
        </p>
        <img className={Style.image_big} src={collage_image_1} alt={t('Therapeutique.Collage.title')} />
        <div className={Style.images_container}>
          <img src={collage_image_2} alt={t('Therapeutique.Collage.title')} />
          <img src={collage_image_3} alt={t('Therapeutique.Collage.title')} />
        </div>
      </section>

      {/* 2. Traitements Endodontiques */}
      <section id="traitements-endodontiques">
        <SectionTitle 
          title={t('Therapeutique.TraitementsEndodontiques.title')} 
          description={t('Therapeutique.TraitementsEndodontiques.subtitle')}
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('Therapeutique.TraitementsEndodontiques.description')}
        </p>
        <img className={Style.image_big} src={endodontiques_image_1} alt={t('Therapeutique.TraitementsEndodontiques.title')} />
        <div className={Style.images_container}>
          <img src={endodontiques_image_2} alt={t('Therapeutique.TraitementsEndodontiques.title')} />
          <img src={endodontiques_image_3} alt={t('Therapeutique.TraitementsEndodontiques.title')} />
        </div>
      </section>

      {/* 3. Extraction */}
      <section id="extraction">
        <SectionTitle 
          title={t('Therapeutique.Extraction.title')} 
          description={t('Therapeutique.Extraction.subtitle')} 
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('Therapeutique.Extraction.description')}
        </p>
        <img className={Style.image_big} src={extraction_image_1} alt={t('Therapeutique.Extraction.title')} />
        <div className={Style.images_container}>
          <img src={extraction_image_2} alt={t('Therapeutique.Extraction.title')} />
          <img src={extraction_image_3} alt={t('Therapeutique.Extraction.title')} />
        </div>
      </section>

      {/* 4. La Chirurgie Implantaire */}
      <section id="chirurgie-implantaire">
        <SectionTitle 
          title={t('Therapeutique.ChirurgieImplantaire.title')} 
          description={t('Therapeutique.ChirurgieImplantaire.subtitle')} 
          buttonText="" href=""
        />
        <p className={Style.description}>
          {t('Therapeutique.ChirurgieImplantaire.description')}
        </p>
        <img className={Style.image_big} src={chirurgie_image_1} alt={t('Therapeutique.ChirurgieImplantaire.title')} />
        <div className={Style.images_container}>
          <img src={chirurgie_image_2} alt={t('Therapeutique.ChirurgieImplantaire.title')} />
          <img src={chirurgie_image_3} alt={t('Therapeutique.ChirurgieImplantaire.title')} />
        </div>
      </section>

      {/* 5. Traitements des anomalies */}
      <section id="anomalies">
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
        <img className={Style.image_big} src={anomalies_image_1} alt={t('Therapeutique.Traitementsanomalies\u00a0.title')} />
        <div className={Style.images_container}>
          <img src={anomalies_image_2} alt={t('Therapeutique.Traitementsanomalies\u00a0.title')} />
          <img src={anomalies_image_3} alt={t('Therapeutique.Traitementsanomalies\u00a0.title')} />
        </div>
      </section>

    </div>
  );
};

export default Therapeutique;