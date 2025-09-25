import React, { useEffect, useState } from "react";
import { getFooter } from "../../api/api";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);

  useEffect(() => {
    getFooter().then((res) => {
      if (res.data.length > 0) setData(res.data[0]);
    });
  }, []);

  if (!data) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        {data.logo && <img src={data.logo} alt="footer logo" />}
      </div>
      <h3>{data[`title_${t("lang") || "uz"}`]}</h3>
      <div className={styles.links}>
        {data.links && data.links.map((lnk, i) => (
          <a key={i} href={lnk.url}>
            {lnk.name}
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} {t("footer.title")}</p>
    </footer>
  );
};

export default Footer;
