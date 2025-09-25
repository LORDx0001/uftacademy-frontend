import React, { useEffect, useState } from "react";
import { getPortfolio } from "../../api/api";
import { useTranslation } from "react-i18next";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const { i18n } = useTranslation();
  const [list, setList] = useState([]);

  useEffect(() => {
    getPortfolio().then((res) => setList(res.data));
  }, []);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>{list.length > 0 && list[0][`title_${i18n.language}`]}</h2>
      <div className={styles.portList}>
        {list.map((item) => (
          <div key={item.id} className={styles.portCard}>
            <img src={item.image} alt={item[`title_${i18n.language}`]} />
            <h3>{item[`title_${i18n.language}`]}</h3>
            <p>{item[`description_${i18n.language}`]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
