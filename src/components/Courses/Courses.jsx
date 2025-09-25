import React, { useEffect, useState } from "react";
import { getCourses } from "../../api/api";
import { useTranslation } from "react-i18next";
import styles from "./Courses.module.css";

const Courses = () => {
  const { i18n } = useTranslation();
  const [list, setList] = useState([]);

  useEffect(() => {
    getCourses().then((res) => setList(res.data));
  }, []);

  return (
    <section id="courses" className={styles.courses}>
      <h2>{list.length > 0 && list[0][`title_${i18n.language}`]}</h2>
      <div className={styles.courseList}>
        {list.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <img src={course.image} alt={course[`title_${i18n.language}`]} />
            <h3>{course[`title_${i18n.language}`]}</h3>
            <p>{course[`description_${i18n.language}`]}</p>
            <span>{course.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
