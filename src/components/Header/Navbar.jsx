import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Navbar = ({ isMobile = false, onLinkClick }) => {
  const { t } = useTranslation();
  
  // Создаем статический массив навигации или получаем из переводов
  const navItems = [
    { href: "#hero", label: t("nav.home", "Главная") },
    { href: "#about", label: t("nav.about", "О нас") },
    { href: "#services", label: t("nav.services", "Услуги") },
    { href: "#gallery", label: t("nav.gallery", "Галерея") },
    { href: "#contact", label: t("nav.contact", "Контакты") }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    
    // Убираем # из href для получения id
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Обновляем URL без перезагрузки страницы
      window.history.pushState({}, '', href);
    }
    
    // Закрываем мобильное меню если нужно
    if (isMobile && onLinkClick) {
      onLinkClick();
    }
  };

  const handleLinkClick = (e, href) => {
    handleSmoothScroll(e, href);
  };

  if (isMobile) {
    return (
      <div className={styles.mobileNavbar}>
        <ul className={styles.mobileLinks}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className={styles.link}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <ul className={styles.links}>
      {navItems.map((item, index) => (
        <li key={index}>
          <a 
            href={item.href} 
            className={styles.link}
            onClick={(e) => handleLinkClick(e, item.href)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;