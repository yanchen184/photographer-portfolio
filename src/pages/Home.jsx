// Home page component for the photographer portfolio
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCamera, FaAward, FaUsers, FaImages } from 'react-icons/fa';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import Testimonials from '../components/Testimonials';
import './Home.css';

const Home = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    photos: 0
  });

  // Animate statistics on mount
  useEffect(() => {
    const targetStats = {
      projects: 500,
      clients: 200,
      awards: 15,
      photos: 10000
    };

    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setStats({
        projects: Math.floor((targetStats.projects * currentStep) / steps),
        clients: Math.floor((targetStats.clients * currentStep) / steps),
        awards: Math.floor((targetStats.awards * currentStep) / steps),
        photos: Math.floor((targetStats.photos * currentStep) / steps)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  // Statistics data
  const statsData = [
    { icon: <FaCamera />, value: stats.projects, label: '完成專案' },
    { icon: <FaUsers />, value: stats.clients, label: '滿意客戶' },
    { icon: <FaAward />, value: stats.awards, label: '獲得獎項' },
    { icon: <FaImages />, value: stats.photos.toLocaleString(), label: '拍攝照片' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="home-about">
        <div className="container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-text">
              <h2>捕捉生命中的美好瞬間</h2>
              <p>
                我是 John，一位熱愛攝影的專業攝影師。擁有超過10年的攝影經驗，
                專注於人像、婚禮、商業和風景攝影。我相信每一張照片都能訴說一個故事，
                每一個瞬間都值得被永恆記錄。
              </p>
              <Link to="/about" className="btn-primary">
                了解更多
              </Link>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500"
                alt="Photographer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="home-stats">
        <div className="container">
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}+</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="home-featured">
        <div className="container">
          <h2>精選作品</h2>
          <p className="section-subtitle">探索我最引以為傲的攝影作品</p>
          <ImageGallery limit={6} />
          <Link to="/portfolio" className="btn-secondary">
            查看更多作品
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="home-services">
        <div className="container">
          <h2>服務項目</h2>
          <div className="services-grid">
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400"
                alt="Wedding Photography"
              />
              <h3>婚禮攝影</h3>
              <p>記錄您人生中最重要的時刻</p>
            </div>
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                alt="Portrait Photography"
              />
              <h3>人像攝影</h3>
              <p>展現您最美的一面</p>
            </div>
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1560439513-74b037a25d84?w=400"
                alt="Commercial Photography"
              />
              <h3>商業攝影</h3>
              <p>提升您的品牌形象</p>
            </div>
          </div>
          <Link to="/services" className="btn-primary">
            查看所有服務
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials">
        <div className="container">
          <h2>客戶評價</h2>
          <p className="section-subtitle">聽聽客戶怎麼說</p>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>準備好創造美好回憶了嗎？</h2>
            <p>讓我們一起捕捉您生命中的珍貴時刻</p>
            <Link to="/contact" className="btn-large">
              立即預約
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
