import { useTranslation } from 'react-i18next';
import styles from './CourseCard.module.css';

const CourseCard = ({ course }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <img src={course.image} alt={course.title} className={styles.preview} />
          <h3>{course.title}</h3>
          <span className={styles.duration}>{course.duration}</span>
        </div>
        <div className={styles.back}>
          <p>{course.description}</p>
          <button className={styles.cta}>{t('course.more')}</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
