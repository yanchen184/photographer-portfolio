// Portfolio page component with filter functionality
import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageGallery from '../components/ImageGallery';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Portfolio categories
  const categories = [
    { id: 'all', label: '全部' },
    { id: 'wedding', label: '婚禮' },
    { id: 'commercial', label: '商業' },
    { id: 'landscape', label: '風景' },
    { id: 'event', label: '活動' }
  ];

  // Portfolio items (extended gallery)
  const portfolioItems = [
    { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', category: 'wedding', title: '浪漫婚禮' },
    { id: 3, url: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?w=800', category: 'commercial', title: '商業攝影' },
    { id: 4, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'landscape', title: '山景' },
    { id: 5, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', category: 'wedding', title: '婚禮時刻' },
    { id: 7, url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800', category: 'commercial', title: '產品攝影' },
    { id: 8, url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800', category: 'landscape', title: '自然風光' },
    { id: 9, url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', category: 'wedding', title: '幸福時光' },
    { id: 11, url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800', category: 'commercial', title: '品牌形象' },
    { id: 12, url: 'https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?w=800', category: 'event', title: '音樂節' }
  ];

  // Filter portfolio items
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>作品集</h1>
        <p>探索我的攝影世界</p>
      </div>

      {/* Filter Buttons */}
      <div className="portfolio-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="portfolio-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            layout
          >
            <img src={item.url} alt={item.title} />
            <div className="portfolio-overlay">
              <h3>{item.title}</h3>
              <span className="category-tag">{
                categories.find(c => c.id === item.category)?.label
              }</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
