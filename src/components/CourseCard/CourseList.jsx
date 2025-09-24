import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CourseCard from './CourseCard';
import styles from './CourseList.module.css';
import { getCourses, getSectionTitles } from '../../api/api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [titles, setTitles] = useState([]);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    getCourses().then(setCourses);
    getSectionTitles().then(setTitles);
  }, []);

  const getTitle = (key) => {
    const item = titles.find(t => t.key === key);
    return item ? item[`title_${lang}`] : '';
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{getTitle('courses')}</h2>

      <div className={styles.courseGrid}>
        {courses.map(course => (
          <CourseCard
            key={course.id}
            course={{
              title: course[`title_${lang}`],
              description: course[`description_${lang}`],
              duration: course.duration,
              image: course.image
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseList;
