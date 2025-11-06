// Hero section component with image slider
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Hero slides data
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920',
      title: '專業攝影服務',
      subtitle: '用鏡頭記錄您的精彩時刻'
    },
    {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920',
      title: '婚禮攝影專家',
      subtitle: '讓愛情故事永恆流傳'
    },
    {
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920',
      title: '商業攝影合作',
      subtitle: '提升品牌視覺形象'
    }
  ];

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Navigate to portfolio page
  const handleExploreClick = () => {
    navigate('/portfolio');
  };

  return (
    <div className="hero">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <button className="hero-button" onClick={handleExploreClick}>
              探索作品
            </button>
          </motion.div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button className="hero-nav hero-nav-prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="hero-nav hero-nav-next" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Slide indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
