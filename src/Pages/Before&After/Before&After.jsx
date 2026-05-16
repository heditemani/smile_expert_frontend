import React from 'react'
import { useTranslation } from 'react-i18next' // <--- 1. Import Hethi
import ImageSlider from '../../components/ImageSlider/ImageSlider'

// 2. Importi el tsawer kima variables houni dima khir:
import before1 from '../../assets/images/BeforeAfter_Page/before1.webp';
import after1 from '../../assets/images/BeforeAfter_Page/after1.webp';
import before2 from '../../assets/images/BeforeAfter_Page/before2.webp';
import after2 from '../../assets/images/BeforeAfter_Page/after2.webp';

const BeforeAfter = () => {
  const { t } = useTranslation(); // <--- 3. Deklari el hook houni

  const Exemples = [
    {
      id: 1,
      key: "depigmentation", 
      imageBefore: before1,  
      imageAfter: after1,
    },
    {
      id: 2,
      key: "autreExemple",   
      imageBefore: before2,
      imageAfter: after2,
    }
  ] 

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