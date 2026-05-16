import { useTranslation } from 'react-i18next';
import SecondBanner from '../../components/SecondBanner/SecondBanner'
import ScheduleSection from '../../components/ScheduleSection/ScheduleSection'
import bannerImg from '../../assets/images/contact_page/contact_banner1.webp';
import CtaBanner from '../../components/CTAsection/CTA';
import ImageSlider from '../../components/ImageSlider/ImageSlider.jsx'


//  importation before after images 


const homepage = () => {

  const { t } = useTranslation();
  return (
    <>
    <SecondBanner 
        slides={[bannerImg, bannerImg, bannerImg]}
        title={t('contact_hero.title')}
        subtitle={t('contact_hero.subtitle')}
        buttonText={t('contact_hero.button')}
      />
    <ScheduleSection isAltBg={true} />

    <ImageSlider title = "Dépigmentation Gingivale au Laser"
                imageBefore = {beforeImage}
                imageAfter = {afterImage} 
                description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>


    <CtaBanner />
    </>
  )
}

export default homepage