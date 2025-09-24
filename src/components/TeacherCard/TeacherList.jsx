import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TeacherCard from './TeacherCard';
import styles from './TeacherList.module.css';
import { getTeachers, getSectionTitles } from '../../api/api';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [titles, setTitles] = useState([]);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    getTeachers().then(setTeachers);
    getSectionTitles().then(setTitles);
  }, []);

  const getTitle = (key) => {
    const item = titles.find(t => t.key === key);
    return item ? item[`title_${lang}`] : '';
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{getTitle('teachers')}</h2>

      <div className={styles.grid}>
        {teachers.map(teacher => (
          <TeacherCard
            key={teacher.id}
            name={teacher[`name_${lang}`] || teacher.name}
            bio={teacher[`bio_${lang}`] || teacher.bio}
            avatar={teacher.avatar}
            skills={teacher.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default TeacherList;
