import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Style from './NotFound.module.css';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Traj3ek win kont direct
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <h1 className={Style.code}>{t('notFound.title')}</h1>
        <div className={Style.divider} />
        <h2 className={Style.subtitle}>{t('notFound.subtitle')}</h2>
        <p className={Style.description}>{t('notFound.description')}</p>
        <button onClick={handleGoBack} className={Style.backButton}>
          {t('notFound.button')}
        </button>
      </div>
    </div>
  );
};

export default NotFound;