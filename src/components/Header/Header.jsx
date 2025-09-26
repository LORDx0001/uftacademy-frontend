import React, { useEffect, useState } from "react";
import { getHeader } from "../../api/api";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
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

  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${header.background})` }}
    >
      <div className={styles.logo}>
        <img src={header.logo} alt="Logo" />
      </div>

      <h1 className={styles.title}>{currentTitle}</h1>
      <p className={styles.description}>{currentDescription}</p>

      <nav>
        <ul className={styles.navbar}>
          <li>About</li>
          <li>Courses</li>
          <li>Professors</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className={styles.langButtons}>
        <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
        <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>
    </header>
  );
};

export default Header;
