import React, { useEffect, useState } from "react";
import { getHeader } from "../../api/api";
import styles from "./Header.module.css"; // siz aytgandek Name.module.css formatida
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const [header, setHeader] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHeader();
      if (data.length > 0) {
        setHeader(data[0]); // faqat bitta header ishlatamiz
      }
    };
    fetchData();
  }, []);

  if (!header) return null;

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={header.logo} alt="Logo" />
      </div>

      {/* Title */}
      <h1>
        {i18n.language === "uz"
          ? header.title_uz
          : i18n.language === "ru"
          ? header.title_ru
          : header.title_en}
      </h1>

      {/* Navbar */}
      <nav>
        <ul className={styles.navbar}>
          <li>
            {i18n.language === "uz"
              ? header.nav_about_uz
              : i18n.language === "ru"
              ? header.nav_about_ru
              : header.nav_about_en}
          </li>
          <li>
            {i18n.language === "uz"
              ? header.nav_courses_uz
              : i18n.language === "ru"
              ? header.nav_courses_ru
              : header.nav_courses_en}
          </li>
          <li>
            {i18n.language === "uz"
              ? header.nav_professors_uz
              : i18n.language === "ru"
              ? header.nav_professors_ru
              : header.nav_professors_en}
          </li>
          <li>
            {i18n.language === "uz"
              ? header.nav_portfolio_uz
              : i18n.language === "ru"
              ? header.nav_portfolio_ru
              : header.nav_portfolio_en}
          </li>
          <li>
            {i18n.language === "uz"
              ? header.nav_contact_uz
              : i18n.language === "ru"
              ? header.nav_contact_ru
              : header.nav_contact_en}
          </li>
        </ul>
      </nav>

      {/* Til almashtirish tugmalari */}
      <div className={styles.langButtons}>
        <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
        <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>
    </header>
  );
};

export default Header;
