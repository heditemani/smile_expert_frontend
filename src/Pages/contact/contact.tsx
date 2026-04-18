import React from 'react';
import styles from './contact.module.css';
import SecondBanner from '../../components/SecondBanner/SecondBanner';
import { useTranslation } from 'react-i18next';
import bannerImg from '../../assets/images/contact_page/contact_banner1.webp';
import locationMap from '../../assets/images/contact_page/contact_location_image.webp'; 

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactPage}>
      {/* Banner */}
      <SecondBanner 
        slides={[bannerImg, bannerImg, bannerImg]}
        title={t('contact_hero.title')}
        subtitle={t('contact_hero.subtitle')}
        buttonText={t('contact_hero.button')}
      />

      {/* Contact Info & Form */}
      <section className={`${styles['contact-section']} section-padding`} id="contact-form">
        <div className="container">
          <div className={styles['contact-split-wrapper']}>
            
            <div className={styles['contact-info-col']}>
              <h2 className={styles['contact-info-title']}>{t('contact.info_title')}</h2>
              <p className={styles['contact-info-desc']}>{t('contact.info_desc')}</p>

              <div className={styles['contact-info-items']}>
                <div className={styles['contact-info-item']}>
                  <div className={styles['contact-info-icon']}><i className="ph ph-map-pin"></i></div>
                  <div className={styles['contact-info-text']}>
                    <h4>{t('contact.location')}</h4>
                    <p>{t('footer.address')}</p>
                  </div>
                </div>

                <div className={styles['contact-info-item']}>
                  <div className={styles['contact-info-icon']}><i className="ph ph-envelope-simple"></i></div>
                  <div className={styles['contact-info-text']}>
                    <h4>{t('contact.email_us')}</h4>
                    <p><a href="mailto:dentalclinic.tn@gmail.com">dentalclinic.tn@gmail.com</a></p>
                  </div>
                </div>

                <div className={styles['contact-info-item']}>
                  <div className={styles['contact-info-icon']}><i className="ph ph-phone"></i></div>
                  <div className={styles['contact-info-text']}>
                    <h4>{t('contact.call_us')}</h4>
                    <p>+216 53 99 00 79 / 72 270 888</p>
                  </div>
                </div>
              </div>

              <div className={styles['contact-social']}>
                <p>{t('contact.follow_us')}</p>
                <div className={styles['contact-social-icons']}>
                  <a href="#" className={styles['contact-social-icon']}><i className="ph-fill ph-facebook-logo"></i></a>
                  <a href="#" className={styles['contact-social-icon']}><i className="ph ph-instagram-logo"></i></a>
                  <a href="#" className={styles['contact-social-icon']}><i className="ph-fill ph-linkedin-logo"></i></a>
                </div>
              </div>
            </div>

            <div className={styles['contact-form-col']}>
              <div className={styles['contact-form-box']}>
                <h3 className={styles['contact-form-title']}>{t('contact.form_title')}</h3>
                <form className={styles['contact-form']}>
                  <div className={styles['form-group']}>
                    <input type="text" className={styles['form-input']} placeholder={t('contact.name_placeholder')} required />
                  </div>
                  <div className={styles['form-group']}>
                    <input type="email" className={styles['form-input']} placeholder={t('contact.email_placeholder')} />
                  </div>
                  <div className={styles['form-group']}>
                    <input type="tel" className={styles['form-input']} placeholder={t('contact.phone_placeholder')} required />
                  </div>
                  <div className={styles['form-group']}>
                    <textarea className={`${styles['form-input']} ${styles['form-textarea']}`} placeholder={t('contact.message_placeholder')}></textarea>
                  </div>
                  <button type="submit" className={`btn btn-primary ${styles['contact-submit-btn']}`}>{t('contact.send')}</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className={`${styles.locations} section-padding`}>
        <div className="container">
          <h2 className="section-title text-center">{t('contact.locations_title')}</h2>
          <p className="section-subtitle text-center mb-4">{t('contact.locations_subtitle')}</p>
          <div className={styles['map-container']}>
            <img src={locationMap} alt="Location" className={styles['map-img']} />
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;