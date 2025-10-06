import React, { useEffect, useState } from "react";
import { getGallery, getTitles } from "../../api/api";
import { useTranslation } from "react-i18next";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const { i18n } = useTranslation();
  const [images, setImages] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentThumbnailPage, setCurrentThumbnailPage] = useState(0);

  const THUMBNAILS_PER_PAGE = 5;
  const AUTO_CHANGE_INTERVAL = 4000; // 4 секунды

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [galleryRes, titlesRes] = await Promise.all([
          getGallery(),
          getTitles()
        ]);
        setImages(galleryRes.data);
        setTitles(titlesRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
      setCurrentIndex(0);
    }
  }, [images]);

  // Автоматическая смена изображений
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
        return nextIndex;
      });
    }, AUTO_CHANGE_INTERVAL);

    return () => clearInterval(interval);
  }, [images]);

  const handleImageSelect = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handlePrevThumbnails = () => {
    setCurrentThumbnailPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextThumbnails = () => {
    const maxPage = Math.ceil(images.length / THUMBNAILS_PER_PAGE) - 1;
    setCurrentThumbnailPage((prev) => Math.min(maxPage, prev + 1));
  };

  const visibleThumbnails = images.slice(
    currentThumbnailPage * THUMBNAILS_PER_PAGE,
    (currentThumbnailPage + 1) * THUMBNAILS_PER_PAGE
  );

  const galleryTitle = titles.find(title => title.key === "gallery");

  if (isLoading) {
    return (
      <section id="gallery" className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.galleryContent}>
            <div className={styles.skeletonMainImage}></div>
            <div className={styles.thumbnails}>
              {[...Array(5)].map((_, index) => (
                <div key={index} className={styles.skeletonThumbnail}></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {galleryTitle ? galleryTitle[`title_${i18n.language}`] : "Галерея"}
        </h2>
        
        <div className={styles.galleryContent}>
          {/* Main Image */}
          <div className={styles.mainImage}>
            {selectedImage && (
              <img 
                src={selectedImage.image} 
                alt={selectedImage[`title_${i18n.language}`] || "Gallery"}
                className={styles.mainImg}
              />
            )}
            {/* Image Counter */}
            <div className={styles.imageCounter}>
              {currentIndex + 1} / {images.length}
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          {images.length > THUMBNAILS_PER_PAGE && (
            <div className={styles.thumbnailNavigation}>
              <button 
                className={styles.navButton}
                onClick={handlePrevThumbnails}
                disabled={currentThumbnailPage === 0}
              >
                ‹
              </button>
              
              <div className={styles.thumbnails}>
                {visibleThumbnails.map((image, index) => {
                  const actualIndex = currentThumbnailPage * THUMBNAILS_PER_PAGE + index;
                  return (
                    <div 
                      key={image.id || actualIndex}
                      className={`${styles.thumbnail} ${selectedImage?.id === image.id ? styles.active : ''}`}
                      onClick={() => handleImageSelect(image, actualIndex)}
                    >
                      <img 
                        src={image.image} 
                        alt={image[`title_${i18n.language}`] || `Gallery ${actualIndex + 1}`}
                        className={styles.thumbnailImg}
                      />
                    </div>
                  );
                })}
              </div>
              
              <button 
                className={styles.navButton}
                onClick={handleNextThumbnails}
                disabled={currentThumbnailPage >= Math.ceil(images.length / THUMBNAILS_PER_PAGE) - 1}
              >
                ›
              </button>
            </div>
          )}
          
          {/* Thumbnails without navigation (if <= 5 images) */}
          {images.length <= THUMBNAILS_PER_PAGE && (
            <div className={styles.thumbnails}>
              {images.map((image, index) => (
                <div 
                  key={image.id || index}
                  className={`${styles.thumbnail} ${selectedImage?.id === image.id ? styles.active : ''}`}
                  onClick={() => handleImageSelect(image, index)}
                >
                  <img 
                    src={image.image} 
                    alt={image[`title_${i18n.language}`] || `Gallery ${index + 1}`}
                    className={styles.thumbnailImg}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;