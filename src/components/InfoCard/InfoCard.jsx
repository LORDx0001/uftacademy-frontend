import styles from './InfoCard.module.css';

const InfoCard = ({ iconName, title, description }) => {
  return (
    <div className={styles.card}>
      {/* Верхний слой с иконкой и заголовком */}
      <div className={styles.front}>
        <div
          className={styles.icon}
          style={{ backgroundImage: `url(${iconName})` }}
        />
        {title && <h3 className={styles.heading}>{title}</h3>}
      </div>

      {/* Нижний слой с описанием */}
      <div className={styles.back}>
        {description && <p className={styles.text}>{description}</p>}
      </div>
    </div>
  );
};

export default InfoCard;
