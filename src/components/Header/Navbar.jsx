import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "about", path: "/about-us" },
  { key: "gallery", path: "/gallery" },
  { key: "courses", path: "/courses" },
  { key: "reviews", path: "/reviews" },
  { key: "contact", path: "/contact" },
];

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.links}>
      {navItems.map(({ key, path }) => (
        <li key={key}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            {t(`header.nav.${key}`)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
