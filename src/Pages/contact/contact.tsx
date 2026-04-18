import React from 'react'
import SecondBanner from '../../components/SecondBanner/SecondBanner'
import { useTranslation } from 'react-i18next';
import bannerImg from '../../assets/images/contact_page/contact_banner1.webp';




const contact = () => {

    const { t } = useTranslation();
    
  return (
    <>
    <SecondBanner 
        slides={[bannerImg, bannerImg, bannerImg]}
        title={t('contact_hero.title')}
        subtitle={t('contact_hero.subtitle')}
        buttonText={t('contact_hero.button')}
        buttonLink="#contact-form"
    />
    </>
  )
}

export default contact