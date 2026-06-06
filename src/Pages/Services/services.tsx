import React, { useState } from "react";
import styles from "./Services.module.css";
import SecondBanner from '../../components/SecondBanner/SecondBanner';
import bannerImg from '../../assets/images/contact_page/contact_banner1.webp';
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';

const Services = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null);

  const handleCardClick = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  // Sections mapped exact m3a el JSON structure mte3ek
  const sections = [
    {
      id: "bucco",
      heading: t('services.bucco.heading'),
      tagline: t('services.bucco.tagline'),
      items: [
        {
          id: "b1",
          title: t('services.items.blanchiment.title'),
          subtitle: t('services.items.blanchiment.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth.svg" alt="Icon" className={styles.icon} />, 
        },
        {
          id: "b2",
          title: t('services.items.Alignement.title'), // uppercase 'A' kima fil JSON mte3ek
          subtitle: t('services.items.Alignement.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth2.svg" alt="Icon" className={styles.icon} />,
        },
        {
          id: "b3",
          title: t('services.items.hyperpigmentation.title'), // Salla7t-ha mel JSON (kenet 'Traitement')
          subtitle: t('services.items.hyperpigmentation.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth.svg" alt="Icon" className={styles.icon} />,
        },
      ],
    },
    {
      id: "alignement-section",
      heading: t('services.Alignement.heading'), // uppercase 'A'
      tagline: t('services.Alignement.tagline'),
      items: [
        {
          id: "p1",
          title: t('services.items.examens.title'),
          subtitle: t('services.items.examens.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth2.svg" alt="Icon" className={styles.icon} />,
        },
        {
          id: "p2",
          title: t('services.items.soins.title'),
          subtitle: t('services.items.soins.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth.svg" alt="Icon" className={styles.icon} />,
        },
      ],
    },
    {
      id: "traitement-section",
      heading: t('services.Traitement.heading'), // uppercase 'T'
      tagline: t('services.Traitement.tagline'),
      items: [
        {
          id: "e1",
          title: t('services.items.Collage.title'), // uppercase 'C'
          subtitle: t('services.items.Collage.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/blanchiment_laser_diode_icon_teeth3.svg" alt="Icon" className={styles.icon} />,
        },
        {
          id: "e2",
          title: t('services.items.Traitement.title'), // match exact m3a "Traitement" f west nested items
          subtitle: t('services.items.Traitement.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
        {
          id: "e3",
          title: t('services.items.Extraction.title'), // uppercase 'E'
          subtitle: t('services.items.Extraction.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
        {
          id: "e4",
          title: t('services.items.chirurgie.title'), // Salla7t-ha men 'chirurgie_guidee' l 'chirurgie' kima fil JSON mte3ek
          subtitle: t('services.items.chirurgie.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
        {
          id: "e5",
          title: t('services.items.anomalies.title'),
          subtitle: t('services.items.anomalies.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
      ],
    },
    {
      id: "protheses-section",
      heading: t('services.Prothèses.title'), // 'Prothèses' (b l-accent accentué) kima upper level key
      tagline: t('services.Prothèses.subtitle'),
      items: [
        {
          id: "f1",
          title: t('services.items.Prothèses Fixes.title'), // match exact m3a el composite key "Prothèses Fixes"
          subtitle: t('services.items.Prothèses Fixes.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />, 
        },
        {
          id: "f2",
          title: t('services.items.Prothèses Amovibles.title'), // match exact m3a "Prothèses Amovibles"
          subtitle: t('services.items.Prothèses Amovibles.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
        {
          id: "f3",
          title: t('services.items.Facettes.title'), // uppercase 'F' kima fil JSON mte3ek
          subtitle: t('services.items.Facettes.subtitle'),
          image: "/icons/box1.png",
          icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
        },
      ],
    },
  ];

  return (
    <main className={styles.page}>
      <SecondBanner 
        slides={[bannerImg, bannerImg, bannerImg]}
        title={t('services.banner.title')} // Raj3at l nos services kima fel JSON
        subtitle={t('services.banner.subtitle')}
        buttonText={t('nav.book_now')}
      />

      <div className={styles.container}>
        {sections.map((section) => (
          <section key={section.id} className={styles.section}>
            <SectionTitle 
              title={section.heading}
              description={section.tagline}
              buttonText={t('services.explore_button_text')}
              href={`#${section.id}`}
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