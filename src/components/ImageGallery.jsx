// Image gallery component with lightbox
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import portfolioConfig from '../config/portfolio.config.js';
import './ImageGallery.css';

const ImageGallery = ({ limit = null }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load gallery images from portfolio config
  const images = portfolioConfig.gallery;
  const displayImages = limit ? images.slice(0, limit) : images;

  // Open lightbox
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Navigate in lightbox
  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % displayImages.length
      : (currentIndex - 1 + displayImages.length) % displayImages.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(displayImages[newIndex]);
  };

  return (
    <>
      <div className="image-gallery">
        {displayImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => openLightbox(image, index)}
          >
            <img src={image.url} alt={image.title} />
            <div className="gallery-overlay">
              <h4>{image.title}</h4>
              <p>{image.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
          >
            <FaChevronLeft />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
          >
            <FaChevronRight />
          </button>
          <div className="lightbox-info">
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.category}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;