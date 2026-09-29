import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.finalCta}>
      <div className={styles.container}>
        <div className={styles.finalCtaWrapper}>
          <h2>{t('finalCta.title')}</h2>
          <Link to="/contact" className={`${styles.btnPrimary} btn`}>
            {t('finalCta.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;