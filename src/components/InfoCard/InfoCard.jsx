import styles from './InfoCard.module.css';

export default function InfoCard({ iconName, title, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles.slide} ${styles.slide1}`}>
          <div
            className={styles.icon}
            style={{ backgroundImage: `url(${iconName})` }}
          />
        </div>
        <div className={`${styles.slide} ${styles.slide2}`}>
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
