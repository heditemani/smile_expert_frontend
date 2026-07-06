import { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './contact.module.css';

import BannerSlider from '../../components/BannerSlider/BannerSlider';
import banner1 from '../../assets/images/contact_page/contact_banner1.webp';

import ScheduleSection from '../../components/ScheduleSection/ScheduleSection';


interface FormDataState {
  name: string;
  email: string;
  tel: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  tel?: string;
  [key: string]: string | undefined;
}

interface FormStatus {
  type: 'loading' | 'success' | 'error' | '';
  msg: string;
}

const Contact = () => {
  const { t } = useTranslation();


  const [formData, setFormData] = useState<FormDataState>({ name: '', email: '', tel: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>({ type: '', msg: '' });

  const validateForm = () => {
    let localErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\s+]{8,15}$/;

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });

    if (!validateForm()) return;

    setStatus({ type: 'loading', msg: 'Envoi en cours...' });

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: 'success', msg: t('contact.success_msg') || 'Votre message a été envoyé avec succès !' });
        setFormData({ name: '', email: '', tel: '', message: '' });
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
      <BannerSlider 
        images={[banner1]} 
        title={t('about.banner.title')} 
        subtitle={t('about.banner.subtitle')} 
        buttonText={t('nav.book_now')}
        onButtonClick={() => {/* Add navigation logic here */}}
      />

      {/* Contact Info & Form */}
      <section className={`${styles['contact-section']} section-padding`} id="contact-form">
        <div className="container">
          <div className={styles['contact-split-wrapper']}>
            
            {/* Left Column */}
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

            {/* right Column */}
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

      <section className={styles.locations}>
        <div className="container">
            <h2 className={styles.sectionTitle}>{t('home.locations.title')}</h2>
            <p className={`${styles.sectionSubtitle} mb-4`}>{t('home.locations.subtitle')}</p>

            {/* Map Container */}
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1127.61206929441!2d10.6915595!3d36.4348777!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x130298c96939a449%3A0xe8edae1e7360dd5b!2sDentiste%20-%20Dr%20Sarra%20Haouet%20Nabeul%20Mrezga%20Hammamet!5e0!3m2!1sfr!2stn!4v1780717038232!5m2!1sfr!2stn"
                    className={styles.googleMap}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cabinet Dentaire Location"
                ></iframe>
            </div>
        </div>
    </section>

      <ScheduleSection isAltBg={true} />
    </div>
  );
};

export default Contact;