import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { getHeaderSection } from '../../api/api';

const Header = () => {
  const { i18n } = useTranslation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [logoUrl, setLogoUrl] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    getHeaderSection().then((data) => {
      const section = Array.isArray(data) ? data[0] : data;
      const lang = i18n.language?.split('-')[0] || 'ru';

      setTitle(section[`title_${lang}`] || '');
      setDescription(section[`description_${lang}`] || '');
      setLogoUrl(section.logo || '');
    });
  }, [i18n.language]);

  return (
    <header className={styles.header}>
      <div className={styles.headerBackground}></div>
      <div className={styles.headerContent}>
        <div className={styles.topbar}>
          <div className={styles.logoWrapper}>
            {logoUrl && (
              <img src={logoUrl} alt="UFT Academy Logo" className={styles.logoImage} />
            )}
          </div>

          <nav className={styles.nav}>
            <a href="#courses">{i18n.t('nav.courses')}</a>
            <a href="#teachers">{i18n.t('nav.teachers')}</a>
            <a href="#portfolio">{i18n.t('nav.portfolio')}</a>
            <a href="#info">{i18n.t('nav.about')}</a>
            <a href="#contact">{i18n.t('nav.contact')}</a>
          </nav>

          <div className={styles.langSwitcher}>
            <button onClick={() => changeLanguage('uz')}>UZ</button>
            <button onClick={() => changeLanguage('ru')}>RU</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
        </div>

        <div className={styles.hero}>
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </div>
      </div>
    </header>
  );
};

export default Header;
