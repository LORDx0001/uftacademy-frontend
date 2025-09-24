import styles from './InfoCard.module.css';
import { getIcon } from './iconMap';

const InfoCard = ({ iconName, title, description }) => {
  const Icon = getIcon(iconName);

  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <div className={styles.icon}><Icon /></div>
          <h3>{title}</h3>
        </div>
        <div className={styles.back}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
