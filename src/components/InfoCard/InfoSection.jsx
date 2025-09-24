import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfoCard from './InfoCard';
import styles from './InfoSection.module.css';
import { getInfoFacts, getSectionTitles } from '../api/api';

const InfoSection = () => {
  const [facts, setFacts] = useState([]);
  const [titles, setTitles] = useState([]);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    getInfoFacts().then(setFacts);
    getSectionTitles().then(setTitles);
  }, []);

  const getTitle = (key) => {
    const item = titles.find(t => t.key === key);
    return item ? item[`title_${lang}`] : '';
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{getTitle('info')}</h2>

      <div className={styles.grid}>
        {facts.map((fact, i) => (
          <InfoCard
            key={i}
            iconName={fact.icon}
            title={fact[`title_${lang}`] || fact.title}
            description={fact[`description_${lang}`] || fact.description}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
