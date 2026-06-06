import React from 'react';
import Style from './Therapeutique.module.css';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useTranslation } from 'react-i18next';

import facetimage_big from '../../assets/images/services/service1/facetimage_big.jpg';
import facetimage1 from '../../assets/images/services/service1/facetimage1.jpg';
import facetimage2 from '../../assets/images/services/service1/facetimage2.jpg';

const Therapeutique = () => {
  const { t } = useTranslation();

  // Traitements anomalies items helpers bch na9rawhom dynamic mel JSON mte3ek
  const anomaliesItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

  return (
    <div className={Style.container}>
      
      {/* 1. Collage résine Composite */}
      <SectionTitle 
        title={t('Therapeutique.Collage.title')} 
        description={t('Therapeutique.Collage.subtitle')} 
      />
      <p className={Style.description}>
        {t('Therapeutique.Collage.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('Therapeutique.Collage.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('Therapeutique.Collage.title')} />
        <img src={facetimage2} alt={t('Therapeutique.Collage.title')} />
      </div>

      {/* 2. Traitements Endodontiques */}
      <SectionTitle 
        title={t('Therapeutique.TraitementsEndodontiques.title')} 
        description={t('Therapeutique.TraitementsEndodontiques.subtitle')} 
      />
      <p className={Style.description}>
        {t('Therapeutique.TraitementsEndodontiques.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('Therapeutique.TraitementsEndodontiques.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('Therapeutique.TraitementsEndodontiques.title')} />
        <img src={facetimage2} alt={t('Therapeutique.TraitementsEndodontiques.title')} />
      </div>

      {/* 3. Extraction */}
      <SectionTitle 
        title={t('Therapeutique.Extraction.title')} 
        description={t('Therapeutique.Extraction.subtitle')} 
      />
      <p className={Style.description}>
        {t('Therapeutique.Extraction.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('Therapeutique.Extraction.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('Therapeutique.Extraction.title')} />
        <img src={facetimage2} alt={t('Therapeutique.Extraction.title')} />
      </div>

      {/* 4. La Chirurgie Implantaire */}
      <SectionTitle 
        title={t('Therapeutique.ChirurgieImplantaire.title')} 
        description={t('Therapeutique.ChirurgieImplantaire.subtitle')} 
      />
      <p className={Style.description}>
        {t('Therapeutique.ChirurgieImplantaire.description')}
      </p>
      <img className={Style.image_big} src={facetimage_big} alt={t('Therapeutique.ChirurgieImplantaire.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('Therapeutique.ChirurgieImplantaire.title')} />
        <img src={facetimage2} alt={t('Therapeutique.ChirurgieImplantaire.title')} />
      </div>

      {/* 5. Traitements des anomalies */}
      <SectionTitle 
        title={t('Therapeutique.Traitementsanomalies\u00a0.title')} 
        description={t('Therapeutique.Traitementsanomalies\u00a0.subtitle')} 
      />
      <div className={Style.description}>
        <ul style={{ paddingLeft: '20px', margin: '0 0 50px 0' }}>
          {anomaliesItems.map((item) => (
            <li key={item}>{t(`Therapeutique.Traitementsanomalies\u00a0.items.${item}`)}</li>
          ))}
        </ul>
      </div>
      <img className={Style.image_big} src={facetimage_big} alt={t('Therapeutique.Traitementsanomalies\u00a0.title')} />
      <div className={Style.images_container}>
        <img src={facetimage1} alt={t('Therapeutique.Traitementsanomalies\u00a0.title')} />
        <img src={facetimage2} alt={t('Therapeutique.Traitementsanomalies\u00a0.title')} />
      </div>

    </div>
  );
};

export default Therapeutique;