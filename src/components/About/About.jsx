import React, { useEffect, useState } from "react";
import { getAbout } from "../../api/api";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

const About = () => {
  const { i18n } = useTranslation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAbout().then((res) => setItems(res.data));
  }, []);

  return (
    <section id="about" className={styles.about}>
      <h2>{items.length > 0 && items[0][`title_${i18n.language}`]}</h2>
      {items.map((item) => (
        <div key={item.id} className={styles.aboutItem}>
          <img src={item.image} alt={item[`title_${i18n.language}`]} />
          <p>{item[`description_${i18n.language}`]}</p>
        </div>
      ))}
    </section>
  );
};

export default About;
