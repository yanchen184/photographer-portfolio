// Image gallery component with lightbox
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageGallery.css';

const ImageGallery = ({ limit = null }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images data
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', category: 'wedding', title: '浪漫婚禮' },
    { id: 3, url: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?w=800', category: 'commercial', title: '商業攝影' },
    { id: 4, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'landscape', title: '風景攝影' },
    { id: 5, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', category: 'wedding', title: '婚禮時刻' },
    { id: 6, url: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800', category: 'portrait', title: '肖像作品' },
    { id: 7, url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800', category: 'commercial', title: '產品攝影' },
    { id: 8, url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800', category: 'landscape', title: '自然風光' },
    { id: 9, url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', category: 'wedding', title: '幸福時光' }
  ];

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
