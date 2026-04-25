import { useTranslation } from 'react-i18next';
import styles from './CtaSplit.module.css';
import ctaImg from '../../assets/images/general/cta_split_section.webp';

const CtaSplit = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.sectionPadding}>
      <div className={styles.container}>
        <div className={styles.ctaSplitWrapper}>
          <div className={styles.ctaSplitContent}>
            <h2>
              {t('ctaSplit.titleLine1')}<br />
              {t('ctaSplit.titleLine2')}<br />
              {t('ctaSplit.titleLine3')}
            </h2>
            <p>
              {t('ctaSplit.description')}
            </p>
            <a 
              href="https://www.med.tn/medecin/dentiste/nabeul/dr-sarra-haouet-164499.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnOutlineWhite}
            >
              {t('ctaSplit.button')}
            </a>
          </div>
          <div className={styles.ctaSplitImage}>
            <img src={ctaImg} alt={t('ctaSplit.imgAlt')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSplit;