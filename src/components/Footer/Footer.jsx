import { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { getSocialMedia, getSectionTitles } from '../../api/api';


const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [socials, setSocials] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    getSocialMedia().then(setSocials);
    getSectionTitles().then(setTitles);
  }, []);

  const getTitle = (key) => {
    const item = titles.find(t => t.key === key);
    return item ? item[`title_${lang}`] : '';
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h3>{t('footer.contact_title')}</h3>
        <p><FaEnvelope /> info@uftacademy.uz</p>
        <p><FaMapMarkerAlt /> {t('footer.location')}</p>
      </div>

      <div className={styles.social}>
        <h3>{getTitle('footer_social') || t('footer.social_title')}</h3>
        {socials.map(s => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
            <img src={s.icon_url} alt={s.name} className={styles.icon} />
          </a>
        ))}
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.123456789!2d69.2400!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4c123456789%3AUFTAcademy!5e0!3m2!1sen!2s!4v0000000000000"
          width="100%"
          height="180"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
