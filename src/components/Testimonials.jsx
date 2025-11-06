// Testimonials component with carousel
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: '張小姐',
      role: '新娘',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      content: 'John的攝影技術真的太棒了！他完美地捕捉了我們婚禮的每一個感動時刻。照片的質感和構圖都超乎預期，強烈推薦給需要攝影服務的朋友們！'
    },
    {
      id: 2,
      name: '李先生',
      role: '企業主',
      avatar: 'https://i.pravatar.cc/150?img=2',
      rating: 5,
      content: '與John合作商業攝影是一次很棒的經驗。他不僅專業，而且充滿創意，為我們的產品拍出了極具吸引力的照片，大大提升了品牌形象。'
    },
    {
      id: 3,
      name: '王小姐',
      role: '模特兒',
      avatar: 'https://i.pravatar.cc/150?img=3',
      rating: 5,
      content: '作為模特兒，我與許多攝影師合作過，但John絕對是最出色的之一。他能夠創造輕鬆的拍攝氛圍，並指導我擺出最自然的姿勢。'
    },
    {
      id: 4,
      name: '陳先生',
      role: '活動主辦方',
      avatar: 'https://i.pravatar.cc/150?img=4',
      rating: 5,
      content: '我們聘請John為公司年會拍攝，他的表現超出預期。不僅準時專業，還能捕捉到活動中最精彩的瞬間。照片質量一流！'
    }
  ];

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
