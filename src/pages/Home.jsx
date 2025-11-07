// Home page component for the photographer portfolio
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCamera, FaAward, FaUsers, FaImages } from 'react-icons/fa';
import portfolioConfig from '../config/portfolio.config.js';
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

  const { photographer, statistics } = portfolioConfig;

  // Animate statistics on mount
  useEffect(() => {
    const targetStats = {
      projects: statistics.completedProjects,
      clients: statistics.satisfiedClients,
      awards: statistics.awards,
      photos: statistics.totalPhotos
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
  }, [statistics]);

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
                我是 {photographer.name}，一位熱愛攝影的專業攝影師。擁有超過{photographer.experience}年的攝影經驗，
                專注於人像、婚禮、商業和風景攝影。我相信每一張照片都能訴說一個故事，
                每一個瞬間都值得被永恆記錄。
              </p>
              <Link to="/about" className="btn-primary">
                了解更多
              </Link>
            </div>
            <div className="about-image">
              <img
                src={photographer.profileImage}
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
            {portfolioConfig.services.slice(0, 3).map((service) => (
              <div key={service.id} className="service-card">
                <img
                  src={service.image}
                  alt={service.title}
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
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