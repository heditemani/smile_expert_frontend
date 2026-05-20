import { useTranslation } from 'react-i18next';

import styles from './home.module.css';
import SecondBanner from '../../components/SecondBanner/SecondBanner'
import ScheduleSection from '../../components/ScheduleSection/ScheduleSection'
import bannerImg from '../../assets/images/contact_page/contact_banner1.webp';
import CtaBanner from '../../components/CTAsection/CTA';

import ServiceCard from '../../components/CardService/ServiceCard.jsx';


import service1 from '../../assets/images/general/service_1_indexpage.jpg';
import service2 from '../../assets/images/general/service_2_indexpage.jpg';
import service3 from '../../assets/images/general/service_3_indexpage.jpg';



//  consultaion

import consultationImg from '../../assets/images/general/consultation_image.jpg';




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

      <div className={styles.servicesGrid}>
      <ServiceCard 
        bgImage={service1}
        icon="/icons/teeth.svg"
        title="Traitements Bucco-Dentaire"
        description="Des améliorations esthétiques aux soins dentaires fonctionnels adéquats à vos objectifs"
      />
      <ServiceCard 
        bgImage={service2}
        icon="/icons/teeth.svg"
        title="Acte de Soins Bucco-Dentaire"
        description="précis, sécurisé et adapté à chaque patient"
      />
      <ServiceCard 
        bgImage={service3}
        icon="/icons/teeth.svg"
        title="Prestations prothétiques dentaire"
        description="sur mesure pour restaurer l'esthétique et la fonction de votre sourire."
      />
    </div>


    <section className={styles.consultation}>
            <div className={styles.stcontainer}>
                <div className={styles.consultation_wrapper}>
                    <div className={styles.consultation_image}>
                        <img src={consultationImg} alt="Dentist Consulting"
                            style={{ aspectRatio: '1/1', objectFit: 'cover', borderRadius: '1rem 0 0 1rem' }}>
                        </img>
                    </div>
                    <div className={styles.consultation_content}>
                        <h2>Vous Ne Savez Pas Quel Service Vous Convient ?</h2>
                        <p>Contactez-nous pour une consultation personnalisée nous vous accompagnerons à chaque étape.
                        </p>
                        <a href="#" className="btn btn-white">Contactez-nous</a>
                    </div>
                </div>
            </div>
        </section>

    

    <ScheduleSection isAltBg={true} />

    <CtaBanner />
    </>
  )
}

export default homepage