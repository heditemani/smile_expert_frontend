import React, { useState } from 'react';
import styles from './contact.module.css';
import SecondBanner from '../../components/SecondBanner/SecondBanner';
import { useTranslation } from 'react-i18next';

import bannerImg from '../../assets/images/contact_page/contact_banner1.webp';
import locationMap from '../../assets/images/contact_page/contact_location_image.webp'; 

import ScheduleSection from '../../components/ScheduleSection/ScheduleSection';

const Contact = () => {
  const { t } = useTranslation();

  // State state variables for form inputs
  const [formData, setFormData] = useState({ name: '', email: '', tel: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', msg: '' }); // Handles success/error messages

  // Validation function (Contrôle de saisie)
  const validateForm = () => {
    let localErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\s+]{8,15}$/; // Standard global pattern for safe entry

    if (!formData.name.trim()) localErrors.name = t('contact.error_name_required') || 'Le nom est obligatoire.';
    
    if (formData.email && !emailRegex.test(formData.email)) {
      localErrors.email = t('contact.error_email_invalid') || 'Email non valide.';
    }
    
    if (!formData.tel.trim()) {
      localErrors.tel = t('contact.error_phone_required') || 'Le téléphone est obligatoire.';
    } else if (!phoneRegex.test(formData.tel)) {
      localErrors.tel = t('contact.error_phone_invalid') || 'Numéro de téléphone non valide.';
    }

    setErrors(localErrors);
    return Object.keys(localErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' }); // clear error while typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });

    if (!validateForm()) return;

    setStatus({ type: 'loading', msg: 'Envoi en cours...' });

    try {
      // Endpoint calling the secure PHP processing server setup
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: 'success', msg: t('contact.success_msg') || 'Votre message a été envoyé avec succès !' });
        setFormData({ name: '', email: '', tel: '', message: '' }); // reset
      } else {
        setStatus({ type: 'error', msg: result.message || 'Une erreur est survenue.' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Erreur de connexion au serveur.' });
    }
  };

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
                  <div className={styles['contact-info-icon']}> <img src="/icons/location.svg" alt="Location" /> </div>
                  <div className={styles['contact-info-text']}>
                    <h4>{t('contact.location')}</h4>
                    <p>{t('footer.address')}</p>
                  </div>
                </div>

                <div className={styles['contact-info-item']}>
                  <div className={styles['contact-info-icon']}><img src="/icons/email.svg" alt="Email" /></div>
                  <div className={styles['contact-info-text']}>
                    <h4>{t('contact.email_us')}</h4>
                    <p><a href="mailto:dentalclinic.tn@gmail.com">dentalclinic.tn@gmail.com</a></p>
                  </div>
                </div>

                <div className={styles['contact-info-item']}>
                  <div className={styles['contact-info-icon']}><img src="/icons/phone.svg" alt="Phone" /></div>
                  <div className={styles['contact-info-text']}>
                    <h4>{t('contact.call_us')}</h4>
                    <p>+216 53 99 00 79 / 72 270 888</p>
                  </div>
                </div>
              </div>

              <div className={styles['contact-social']}>
                <p>{t('contact.follow_us')}</p>
                <div className={styles['contact-social-icons']}>
                  <a href="#" className={styles['contact-social-icon']}><img src="/icons/facebook.svg" alt="Facebook" /></a>
                  <a href="#" className={styles['contact-social-icon']}><img src="/icons/instagram.svg" alt="Instagram" /></a>
                  <a href="#" className={styles['contact-social-icon']}><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
                </div>
              </div>
            </div>

            <div className={styles['contact-form-col']}>
              <div className={styles['contact-form-box']}>
                <h3 className={styles['contact-form-title']}>{t('contact.form_title')}</h3>
                
                {status.msg && (
                  <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                    {status.msg}
                  </div>
                )}

                <form className={styles['contact-form']} onSubmit={handleSubmit} noValidate>
                  <div className={styles['form-group']}>
                    <input 
                      type="text" 
                      name="name"
                      className={`${styles['form-input']} ${errors.name ? styles.inputError : ''}`} 
                      placeholder={t('contact.name_placeholder')} 
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>
                  
                  <div className={styles['form-group']}>
                    <input 
                      type="email" 
                      name="email"
                      className={`${styles['form-input']} ${errors.email ? styles.inputError : ''}`} 
                      placeholder={t('contact.email_placeholder')} 
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <input 
                      type="tel" 
                      name="tel"
                      className={`${styles['form-input']} ${errors.tel ? styles.inputError : ''}`} 
                      placeholder={t('contact.phone_placeholder')} 
                      value={formData.tel}
                      onChange={handleChange}
                    />
                    {errors.tel && <span className={styles.errorText}>{errors.tel}</span>}
                  </div>

                  <div className={styles['form-group']}>
                    <textarea 
                      name="message"
                      className={`${styles['form-input']} ${styles['form-textarea']}`} 
                      placeholder={t('contact.message_placeholder')}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles['contact-submit-btn']}`}>
                    {t('contact.send')}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className={`${styles.locations} section-padding`}>
        <div className="container">
          <h2 className="section-title text-center">{t('contact.locations_title')}</h2>
          <div className={styles['map-container']}>
            <img src={locationMap} alt="Location" className={styles['map-img']} />
          </div>
        </div>
      </section>

      <ScheduleSection isAltBg={false} />

    </div>
  );
};

export default Contact;