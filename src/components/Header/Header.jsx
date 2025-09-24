import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>UFT Academy</div>

      <nav className={styles.nav}>
        <a href="#courses">{t('nav.courses')}</a>
        <a href="#teachers">{t('nav.teachers')}</a>
        <a href="#portfolio">{t('nav.portfolio')}</a>
        <a href="#info">{t('nav.about')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </nav>

      <div className={styles.langSwitcher}>
        <button onClick={() => changeLanguage('uz')}>UZ</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </header>
  );
};

export default Header;
