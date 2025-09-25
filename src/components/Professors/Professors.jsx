import React, { useEffect, useState } from "react";
import { getProfessors } from "../../api/api";
import { useTranslation } from "react-i18next";
import styles from "./Professors.module.css";

const Professors = () => {
  const { i18n } = useTranslation();
  const [list, setList] = useState([]);

  useEffect(() => {
    getProfessors().then((res) => setList(res.data));
  }, []);

  return (
    <section id="professors" className={styles.professors}>
      <h2>{list.length > 0 && list[0][`title_${i18n.language}`]}</h2>
      <div className={styles.profList}>
        {list.map((prof) => (
          <div key={prof.id} className={styles.profCard}>
            <img src={prof.image} alt={prof[`title_${i18n.language}`]} />
            <h3>{prof[`title_${i18n.language}`]}</h3>
            <p>{prof[`description_${i18n.language}`]}</p>
            <p>Yosh: {prof.age}</p>
            <p>Malaka yillari: {prof.experience_years}</p>
            <p>Tillar: {prof.languages}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Professors;
