import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

const langs = ["uz", "ru", "en"];

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.langButtons}>
      {langs.map((lang) => (
        <button
          key={lang}
          className={
            i18n.language === lang
              ? `${styles.lang} ${styles.activeLang}`
              : styles.lang
          }
          onClick={() => i18n.changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LangSwitcher;
