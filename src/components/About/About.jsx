import React, { useEffect, useState } from "react";
import { getAbout, getAboutStats, getAboutImages } from "../../api/api";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

const About = () => {
  const { i18n } = useTranslation();
  const [aboutData, setAboutData] = useState(null);
  const [statistics, setStatistics] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAbout().then((res) => {
      if (res.data && res.data.length > 0) {
        setAboutData(res.data[0]);
      }
    });
    getAboutStats().then((res) => setStatistics(res.data));
    getAboutImages().then((res) => setImages(res.data));
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Main About Content */}
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              {aboutData && aboutData[`title_${i18n.language}`]}
            </h2>
            <div className={styles.description}>
              {aboutData && (
                <div dangerouslySetInnerHTML={{
                  __html: aboutData[`description_${i18n.language}`]
                }} />
              )}
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.imageGrid}>
              {images.slice(0, 5).map((image, index) => (
                <img 
                  key={image.id || index}
                  src={image.image} 
                  alt={`About ${index + 1}`} 
                  className={styles.aboutImage} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        {statistics.length > 0 && (
          <div className={styles.statistics}>
            <div className={styles.statsGrid}>
              {statistics.map((stat) => (
                <div key={stat.id} className={styles.statItem}>
                  <span className={styles.statNumber}>
                    {stat[`title_${i18n.language}`]}
                  </span>
                  <p className={styles.statLabel}>
                    {stat[`description_${i18n.language}`]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;