import React from 'react'
import { useTranslation } from 'react-i18next'
import ImageSlider from '../../components/ImageSlider/ImageSlider'

import before1 from '../../assets/images/BeforeAfter_Page/before1.webp';
import after1 from '../../assets/images/BeforeAfter_Page/after1.webp';

import before2 from '../../assets/images/BeforeAfter_Page/before2.webp';
import after2 from '../../assets/images/BeforeAfter_Page/after2.webp';

import before3 from '../../assets/images/BeforeAfter_Page/before3.webp';
import after3 from '../../assets/images/BeforeAfter_Page/after3.webp';

import before4 from '../../assets/images/BeforeAfter_Page/before4.webp';
import after4 from '../../assets/images/BeforeAfter_Page/after4.webp';

import before5 from '../../assets/images/BeforeAfter_Page/before5.webp';
import after5 from '../../assets/images/BeforeAfter_Page/after5.webp';

import before6 from '../../assets/images/BeforeAfter_Page/before6.webp';
import after6 from '../../assets/images/BeforeAfter_Page/after6.webp';

import before7 from '../../assets/images/BeforeAfter_Page/before7.webp';
import after7 from '../../assets/images/BeforeAfter_Page/after7.webp';

import before8 from '../../assets/images/BeforeAfter_Page/before8.webp';
import after8 from '../../assets/images/BeforeAfter_Page/after8.webp';

import before9 from '../../assets/images/BeforeAfter_Page/before9.webp';
import after9 from '../../assets/images/BeforeAfter_Page/after9.webp';

import before10 from '../../assets/images/BeforeAfter_Page/before10.webp';
import after10 from '../../assets/images/BeforeAfter_Page/after10.webp';

import before11 from '../../assets/images/BeforeAfter_Page/before11.webp';
import after11 from '../../assets/images/BeforeAfter_Page/after11.webp';

import before12 from '../../assets/images/BeforeAfter_Page/before12.webp';
import after12 from '../../assets/images/BeforeAfter_Page/after12.webp';

import before13 from '../../assets/images/BeforeAfter_Page/before13.webp';
import after13 from '../../assets/images/BeforeAfter_Page/after13.webp';

const BeforeAfter = () => {
  const { t } = useTranslation();

  const Exemples = [
    {
      id: 1,
      key: "depigmentation",
      imageBefore: before3,
      imageAfter: after3,
    },
    {
      id: 2,
      key: "eclaircissement",
      imageBefore: before9,
      imageAfter: after9,
    },
    {
        id: 3,
        key: "protheseTotale",
        imageBefore: before6,
        imageAfter: after6,
    },
    {
        id: 4,
        key: "depigmentation",
        imageBefore: before2,
        imageAfter: after2,
    },
    {
        id: 5,
        key: "protheseFlexite",
        imageBefore: before1,
        imageAfter: after1,
    },
    {
        id: 6,
        key: "depigmentation",
        imageBefore: before4,
        imageAfter: after4,
    },
    {
        id: 7,
        key: "strassDentaire",
        imageBefore: before5,
        imageAfter: after5,
    },
    {
        id: 8,
        key: "blanchiment",
        imageBefore: before8,
        imageAfter: after8,
    },
    {
        id: 9,
        key: "blanchiment",
        imageBefore: before7,
        imageAfter: after7,
    },
    {
        id: 10,
        key: "Détartrage",
        imageBefore: before10,
        imageAfter: after10,
    },
    {
        id: 11,
        key: "fermeture_diasteme",
        imageBefore: before11,
        imageAfter: after11,
    },
    {
        id: 12,
        key: "fermeture_diasteme",
        imageBefore: before12,
        imageAfter: after12,
    },
    {
        id: 13,
        key: "herpes_labial",
        imageBefore: before13,
        imageAfter: after13,
    }

  ];

  

  return (
    <>
      {Exemples.map((ex) => (

        <ImageSlider 
          key={ex.id}
          title={t(`beforeAfter.${ex.key}.title`)}
          imageBefore={ex.imageBefore}
          imageAfter={ex.imageAfter} 
          description={t(`beforeAfter.${ex.key}.description`)}
        />
        
      ))}
    </>
  )
}

export default BeforeAfter