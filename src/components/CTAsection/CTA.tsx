import { useTranslation } from 'react-i18next';
import styles from './CTA.module.css';

const CtaBanner = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.sectionPadding}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <h2 className={styles.sectionTitle}>{t('cta.title')}</h2>
          <a 
            href="https://www.med.tn/medecin/dentiste/nabeul/dr-sarra-haouet-164499.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.btnWhite} btn`} 
            style={{ marginTop: '2rem' }}
          >
            {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;