// Testimonials component with carousel
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import portfolioConfig from '../config/portfolio.config.js';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Load testimonials from portfolio config
  const testimonials = portfolioConfig.testimonials;

  // Navigation handlers
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Render stars
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar key={i} className={i < rating ? 'star-filled' : 'star-empty'} />
    ));
  };

  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            className="testimonial-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <FaQuoteLeft className="quote-icon" />
            <div className="testimonial-content">
              <p>{testimonials[currentTestimonial].content}</p>
            </div>
            <div className="testimonial-author">
              <img 
                src={testimonials[currentTestimonial].avatar} 
                alt={testimonials[currentTestimonial].name}
                className="author-avatar"
              />
              <div className="author-info">
                <h4>{testimonials[currentTestimonial].name}</h4>
                <p>{testimonials[currentTestimonial].role}</p>
                <div className="rating">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button className="testimonial-nav testimonial-prev" onClick={prevTestimonial}>
          <FaChevronLeft />
        </button>
        <button className="testimonial-nav testimonial-next" onClick={nextTestimonial}>
          <FaChevronRight />
        </button>

        {/* Indicators */}
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;