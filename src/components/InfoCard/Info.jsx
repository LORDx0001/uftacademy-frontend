import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Info.module.css';
import InfoCard from './InfoCard';
import { getInfoItems, getSectionTitleByKey } from '../../api/api';

export default function Info() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const { i18n } = useTranslation();
  const lang = i18n.language?.split('-')[0] || 'ru';

  useEffect(() => {
    getInfoItems().then(setItems);
    getSectionTitleByKey('info').then((data) => {
      setTitle(data[`title_${lang}`] || data.title_ru);
    });
  }, [lang]);

  return (
    <section className={styles.info}>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <InfoCard
            key={index}
            iconName={item.icon}
            title={item[`title_${lang}`] || item.title_ru}
            description={item[`description_${lang}`] || item.description_ru}
          />
        ))}
      </div>
    </section>
  );
}
