import React, { useEffect, useState } from "react";
import { getHeader } from "../../api/api";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import LangSwitcher from "./LangSwitcher";
import { Link } from "react-router-dom";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [header, setHeader] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHeader();
      if (data.length > 0) {
        setHeader(data[0]);
      }
    };
    fetchData();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
    <header id="hero" className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={header.logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.rightBlock}>
          <Navbar />
          <LangSwitcher />
        </div>

        {/* Burger Menu Button */}
        <div
          className={`${styles.burger} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
        >
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <Navbar isMobile={true} onLinkClick={closeMobileMenu} />
        <LangSwitcher isMobile={true} />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileMenuOverlay}
          onClick={closeMobileMenu}
        ></div>
      )}

      <div className={styles.centerContent}>
        <h1 className={styles.title}>{currentTitle}</h1>
        <p className={styles.description}>{currentDescription}</p>

        <div className={styles.button3D}>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }}>
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