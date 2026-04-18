import { useTranslation } from 'react-i18next';
import SecondBanner from '../../components/SecondBanner/SecondBanner'
import ScheduleSection from '../../components/ScheduleSection/ScheduleSection'
import bannerImg from '../../assets/images/contact_page/contact_banner1.webp';
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
    </>
  )
}

export default homepage