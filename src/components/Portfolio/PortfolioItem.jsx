import styles from './PortfolioItem.module.css';
import { useTranslation } from 'react-i18next';

const PortfolioItem = ({ title, image, category, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={title} className={styles.preview} />
      <div className={styles.overlay}>
        <h4>{title}</h4>
        <span>{t(`portfolio.category.${category}`)}</span>
      </div>
    </div>
  );
};

export default PortfolioItem;
