import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PortfolioItem from './PortfolioItem';
import styles from './PortfolioGallery.module.css';
import { getPortfolioItems, getSectionTitles } from '../../api/api';

const PortfolioGallery = () => {
  const [items, setItems] = useState([]);
  const [titles, setTitles] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    getPortfolioItems().then(setItems);
    getSectionTitles().then(setTitles);
  }, []);

  const getTitle = (key) => {
    const item = titles.find(t => t.key === key);
    return item ? item[`title_${lang}`] : '';
  };

  const filteredItems = filter === 'all'
    ? items
    : items.filter(item => item.category === filter);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{getTitle('portfolio')}</h2>

      <div className={styles.filterBar}>
        {['all', 'design', 'frontend', 'branding'].map(cat => (
          <button
            key={cat}
            className={filter === cat ? styles.active : ''}
            onClick={() => setFilter(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredItems.map(item => (
          <PortfolioItem
            key={item.id}
            title={item[`title_${lang}`] || item.title}
            image={item.image}
            category={item.category}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <img src={selected.image} alt={selected[`title_${lang}`] || selected.title} />
          <h3>{selected[`title_${lang}`] || selected.title}</h3>
          <p>{selected[`description_${lang}`] || selected.description}</p>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
