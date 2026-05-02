import React, { useState } from "react";
import styles from "./Services.module.css";
import SecondBanner from '../../components/SecondBanner/SecondBanner';
import bannerImg from '../../assets/images/contact_page/contact_banner1.webp';
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { useTranslation } from 'react-i18next';

// Interfaces remain the same
interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  icon?: React.ReactNode;
}

interface ServiceSection {
  id: string;
  heading: string;
  tagline?: string;
  items: ServiceItem[];
}

const Services: React.FC = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  // Define data inside the component so t() is available
  const sections: ServiceSection[] = [
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
        icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />, 
      },
      {
        id: "b2",
        title: t('services.items.Alignement.title'),
        subtitle: t('services.items.Alignement.subtitle'),
        image: "/icons/box1.png",
        icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
      },
      {
        id: "b3",
        title: t('services.items.Traitement.title'),
        subtitle: t('services.items.Traitement.subtitle'),
        image: "/icons/box1.png",
        icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
      },
    ],
  },
  {
    id: "alignement-section",
    heading: t('services.Alignement.heading'),
    tagline: t('services.Alignement.tagline'),
    items: [
      {
        id: "p1",
        title: t('services.items.examens.title'),
        subtitle: t('services.items.examens.subtitle'),
        image: "/icons/box1.png",
        icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
      },
      {
        id: "p2",
        title: t('services.items.soins.title'),
        subtitle: t('services.items.soins.subtitle'),
        image: "/icons/box1.png",
        icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
      },
    ],
  },
  {
    id: "traitement-section",
    heading: t('services.Traitement.heading'),
    tagline: t('services.Traitement.tagline'),
    items: [
      {
        id: "e1",
        title: t('services.items.collage.title'),
        subtitle: t('services.items.collage.subtitle'),
        image: "/icons/box1.png",
        icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
      },
      {
        id: "e2",
        title: t('services.items.traitements_endo.title'),
        subtitle: t('services.items.traitements_endo.subtitle'),
        image: "/icons/box1.png",
        icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
      },
      {
        id: "e3",
        title: t('services.items.extraction.title'),
        subtitle: t('services.items.extraction.subtitle'),
        image: "/icons/box1.png",
        icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
      },
      {
        id: "e4",
        title: t('services.items.chirurgie_guidee.title'),
        subtitle: t('services.items.chirurgie_guidee.subtitle'),
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
    heading: t('services.Protheses.heading'),
    tagline: t('services.Protheses.tagline'),
    items: [
      {
        id: "f1",
        title: t('services.items.protheses_fixes.title'),
        subtitle: t('services.items.protheses_fixes.subtitle'),
        image: "/icons/box1.png",
        icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />, 
      },
      {
        id: "f2",
        title: t('services.items.protheses_amovibles.title'),
        subtitle: t('services.items.protheses_amovibles.subtitle'),
        image: "/icons/box1.png",
        icon: <img src="/icons/mdi_tooth-outline.png" alt="Icon" className={styles.icon} />,
      },
      {
        id: "f3",
        title: t('services.items.facettes.title'),
        subtitle: t('services.items.facettes.subtitle'),
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
        title={t('contact_hero.title')}
        subtitle={t('contact_hero.subtitle')}
        buttonText={t('contact_hero.button')}
      />

      <div className={styles.container}>
        {sections.map((section) => (
          <section key={section.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                {section.tagline && (
                  <p className={styles.sectionTagline}>{section.tagline}</p>
                )}
              </div>
              <button className={styles.exploreBtn}>
                {t('services.explore_button_text', 'Explorez ce Service')}
              </button>
            </div>

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