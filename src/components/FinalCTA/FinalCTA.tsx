import { useTranslation } from 'react-i18next';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.finalCta}>
      <div className={styles.container}>
        <div className={styles.finalCtaWrapper}>
          <h2>{t('finalCta.title')}</h2>
          <a href="/contact" className={`${styles.btnPrimary} btn`}>
            {t('finalCta.button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;