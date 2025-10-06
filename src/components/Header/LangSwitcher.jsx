import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

const LangSwitcher = ({ isMobile = false }) => {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={isMobile ? styles.mobileLangs : styles.langs}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`${styles.lang} ${i18n.language === lang.code ? styles.active : ''}`}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LangSwitcher;