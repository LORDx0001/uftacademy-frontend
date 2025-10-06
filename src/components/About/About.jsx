import React, { useEffect, useState } from "react";
import { getAbout, getAboutStats, getAboutImages } from "../../api/api";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

const About = () => {
  const { i18n } = useTranslation();
  const [aboutData, setAboutData] = useState(null);
  const [statistics, setStatistics] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [aboutRes, statsRes, imagesRes] = await Promise.all([
          getAbout(),
          getAboutStats(),
          getAboutImages()
        ]);

        if (aboutRes.data && aboutRes.data.length > 0) {
          setAboutData(aboutRes.data[0]);
        }
        setStatistics(statsRes.data);
        setImages(imagesRes.data);
      } catch (error) {
        console.error("Error fetching About data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonDescription}>
              <div className={styles.skeletonDescriptionLine}></div>
              <div className={styles.skeletonDescriptionLine}></div>
              <div className={styles.skeletonDescriptionLine}></div>
              <div className={styles.skeletonDescriptionLine}></div>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.skeletonImageGrid}>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonImage}></div>
            </div>
          </div>
        </div>
        
        <div className={styles.skeletonStatistics}>
          <div className={styles.skeletonStatsGrid}>
            {[...Array(5)].map((_, index) => (
              <div key={index} className={styles.skeletonStatItem}>
                <div className={styles.skeletonStatNumber}></div>
                <div className={styles.skeletonStatLabel}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  if (isLoading) {
    return <SkeletonLoader />;
  }

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
                  loading="lazy"
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