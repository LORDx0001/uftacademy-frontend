import styles from './TeacherCard.module.css';
import { useTranslation } from 'react-i18next';

const TeacherCard = ({ name, bio, avatar, skills }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <img src={avatar} alt={name} className={styles.avatar} />
          <h3>{name}</h3>
          <div className={styles.skills}>
            {skills.map((skill, i) => (
              <span key={i} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div className={styles.back}>
          <p>{bio}</p>
          <button className={styles.cta}>{t('teacher.more')}</button>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
