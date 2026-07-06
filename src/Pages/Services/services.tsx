import React, { useState } from "react";
import styles from "./Services.module.css";


import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle/SectionTitle.js';


import banner1 from '../../assets/images/services/banner/img1.webp';
import banner2 from '../../assets/images/services/banner/img2.webp';



import Blanchimentdesdents from "../../assets/images/services/service1/Blanchiment des dents par LASER DIODE.webp";
import Alignementgingival from "../../assets/images/services/service1/Alignement gingival au laser diode.webp";
import Traitementdelhyper  from "../../assets/images/services/service1/Traitement hyprpigmntation par lasr.webp";


import Examensréguliers from "../../assets/images/services/service1/xamns réguliers.webp";
import SoinsPréventifs from "../../assets/images/services/service1/soins préventifs.webp";


import Collagerésine from "../../assets/images/services/service1/Collage résine Composite.webp";
import LeTraitementsEndodontiques from "../../assets/images/services/service1/Traitement hyprpigmntation par lasr.webp";
import Extraction from "../../assets/images/services/service1/extraction.webp";
import ChirurgieImplantaire  from "../../assets/images/services/service1/La Chirurgie Implantaire Guidée par Ordinateur.webp";
import Traitementsdesanomalies from "../../assets/images/services/service1/Traitement des anomalies.webp";


import ProthèsesFixes from "../../assets/images/services/service1/Prothèses Fixes.webp";
import ProthèsesAmovibles from "../../assets/images/services/service1/La Prothèses Amovibles.webp";
import Facettesdentaire from "../../assets/images/services/service1/Facettes dentaires.webp";


import BannerSlider from '../../components/BannerSlider/BannerSlider';


const Services = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null);

  const handleCardClick = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const sections = [
    {
      id: "bucco",
      heading: t('services.bucco.heading'),
      tagline: t('services.bucco.tagline'),
      link: "bucco-dentaire",
      items: [
        {
          id: "b1",
          title: t('services.items.blanchiment.title'),
          subtitle: t('services.items.blanchiment.subtitle'),
          image: Blanchimentdesdents,
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth.svg" alt="Icon" className={styles.icon} />, 
        },
        {
          id: "b2",
          title: t('services.items.Alignement.title'),
          subtitle: t('services.items.Alignement.subtitle'),
          image:Alignementgingival,
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth2.svg" alt="Icon" className={styles.icon} />,
        },
        {
          id: "b3",
          title: t('services.items.hyperpigmentation.title'),
          subtitle: t('services.items.hyperpigmentation.subtitle'),
          image:  Traitementdelhyper, 
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth.svg" alt="Icon" className={styles.icon} />,
        },
      ],
    },
    {
      id: "alignement-section",
      heading: t('services.Alignement.heading'),
      tagline: t('services.Alignement.tagline'),
      link: "soins-bucco-dentaires",
      items: [
        {
          id: "p1",
          title: t('services.items.examens.title'),
          subtitle: t('services.items.examens.subtitle'),
          image: Examensréguliers,
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth2.svg" alt="Icon" className={styles.icon} />,
        },
        {
          id: "p2",
          title: t('services.items.soins.title'),
          subtitle: t('services.items.soins.subtitle'),
          image: SoinsPréventifs,
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth.svg" alt="Icon" className={styles.icon} />,
        },
      ],
    },
    {
      id: "traitement-section",
      heading: t('services.Traitement.heading'),
      tagline: t('services.Traitement.tagline'),
      link: "therapeutique",
      items: [
        {
          id: "e1",
          title: t('services.items.Collage.title'),
          subtitle: t('services.items.Collage.subtitle'),
          image: Collagerésine,
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth3.svg" alt="Icon" className={styles.icon} />,
        },
        {
          id: "e2",
          title: t('services.items.Traitement.title'),
          subtitle: t('services.items.Traitement.subtitle'),
          image: LeTraitementsEndodontiques ,
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
        {
          id: "e3",
          title: t('services.items.Extraction.title'),
          subtitle: t('services.items.Extraction.subtitle'),
          image:  Extraction ,
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
        {
          id: "e4",
          title: t('services.items.chirurgie.title'),
          subtitle: t('services.items.chirurgie.subtitle'),
          image: ChirurgieImplantaire,
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
        {
          id: "e5",
          title: t('services.items.anomalies.title'),
          subtitle: t('services.items.anomalies.subtitle'),
          image:Traitementsdesanomalies,
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
      ],
    },
    {
      id: "protheses-section",
      heading: t('services.Prothèses.title'),
      tagline: t('services.Prothèses.subtitle'),
      link: "protheses-dentaires",
      items: [
        {
          id: "f1",
          title: t('services.items.Prothèses Fixes.title'),
          subtitle: t('services.items.Prothèses Fixes.subtitle'),
          image:  ProthèsesFixes,
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />, 
        },
        {
          id: "f2",
          title: t('services.items.Prothèses Amovibles.title'),
          subtitle: t('services.items.Prothèses Amovibles.subtitle'),
          image: ProthèsesAmovibles,
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
        {
          id: "f3",
          title: t('services.items.Facettes.title'),
          subtitle: t('services.items.Facettes.subtitle'),
          image: Facettesdentaire,
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
      ],
    },
  ];

  return (
    <main className={styles.page}>
      <BannerSlider 
        images={[banner1, banner2]} 
        title={t('about.banner.title')} 
        subtitle={t('about.banner.subtitle')} 
      />

      <div className={styles.container}>
        {sections.map((section) => (
          <section key={section.id} className={styles.section}>
            <SectionTitle 
              title={section.heading}
              description={section.tagline}
              buttonText={t('services.explore_button_text')}
              href={`/services/${section.link}`}
            />

            <div className={styles.grid}>
              {section.items.map((item) => (
                <ServiceCard
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  backgroundImage={item.image}
                  icon={item.icon}
                  active={activeId === item.id}
                  onClick={() => handleCardClick(item.id)}
                />
              ))}   
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Services;