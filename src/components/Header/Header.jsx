import React, { useEffect, useState } from "react";
import { getHeader } from "../../api/api";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [header, setHeader] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHeader();
      if (data.length > 0) {
        setHeader(data[0]);
      }
    };
    fetchData();
  }, []);

  if (!header) return null;

  const currentTitle =
    i18n.language === "uz"
      ? header.title_uz
      : i18n.language === "ru"
        ? header.title_ru
        : header.title_en;

  const currentDescription =
    i18n.language === "uz"
      ? header.description_uz
      : i18n.language === "ru"
        ? header.description_ru
        : header.description_en;

  const buttons = t("header.buttons", { returnObjects: true });

  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${header.background})` }}
    >
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <img src={header.logo} alt="Logo" />
        </div>
        <div className={styles.rightBlock}>
          <Navbar />
          <LangSwitcher />
        </div>
      </div>

      <div className={styles.centerContent}>
        <h1 className={styles.title}>{currentTitle}</h1>
        <p className={styles.description}>{currentDescription}</p>

        <div className={styles.button3D}>
          <a href="#">
            {buttons.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </a>
        </div>
      </div>

    </header>
  );
};

export default Header;
