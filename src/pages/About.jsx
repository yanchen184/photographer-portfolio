// About page component
import { motion } from 'framer-motion';
import { FaCamera, FaAward, FaGraduationCap, FaHeart } from 'react-icons/fa';
import portfolioConfig from '../config/portfolio.config.js';
import './About.css';

const About = () => {
  const { photographer, timeline, skills, philosophy } = portfolioConfig;

  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>關於我</h1>
        <p>認識攝影師 {photographer.name}</p>
      </div>

      {/* About Introduction */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <motion.div 
              className="intro-image"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={photographer.profileImage} alt={photographer.name} />
            </motion.div>
            <motion.div 
              className="intro-text"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Hello, 我是 {photographer.name}</h2>
              <p className="lead">
                一位充滿熱情的專業攝影師，擁有超過{photographer.experience}年的攝影經驗。
              </p>
              <p>
                {photographer.fullBio}
              </p>
              <div className="intro-stats">
                <div className="stat">
                  <FaCamera className="stat-icon" />
                  <span>{photographer.experience}年經驗</span>
                </div>
                <div className="stat">
                  <FaAward className="stat-icon" />
                  <span>{portfolioConfig.statistics.awards}+ 獎項</span>
                </div>
                <div className="stat">
                  <FaHeart className="stat-icon" />
                  <span>{portfolioConfig.statistics.satisfiedClients}+ 滿意客戶</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <div className="container">
          <h2>專業技能</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="container">
          <h2>我的旅程</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.event}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy">
        <div className="container">
          <h2>攝影理念</h2>
          <div className="philosophy-cards">
            {philosophy.map((item, index) => (
              <div key={index} className="philosophy-card">
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;