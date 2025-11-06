// About page component
import { motion } from 'framer-motion';
import { FaCamera, FaAward, FaGraduationCap, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  // Timeline data
  const timeline = [
    { year: '2010', event: '開始攝影之旅', description: '購買第一台單眼相機，開始探索攝影世界' },
    { year: '2013', event: '攝影學院畢業', description: '從紐約視覺藝術學院攝影系畢業' },
    { year: '2015', event: '成立工作室', description: '在台北開設個人攝影工作室' },
    { year: '2018', event: '國際攝影獎', description: '獲得國際攝影大賽人像組金獎' },
    { year: '2020', event: '品牌合作', description: '與多家知名品牌建立長期合作關係' },
    { year: '2024', event: '攝影展覽', description: '舉辦個人攝影展「光影之間」' }
  ];

  // Skills data
  const skills = [
    { name: '人像攝影', level: 95 },
    { name: '婚禮攝影', level: 90 },
    { name: '商業攝影', level: 85 },
    { name: '後製處理', level: 88 },
    { name: '燈光布置', level: 92 },
    { name: '創意構圖', level: 94 }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>關於我</h1>
        <p>認識攝影師 John</p>
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
              <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600" alt="John" />
            </motion.div>
            <motion.div 
              className="intro-text"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Hello, 我是 John</h2>
              <p className="lead">
                一位充滿熱情的專業攝影師，擁有超過10年的攝影經驗。
              </p>
              <p>
                攝影對我來說不只是工作，更是一種生活態度。我相信每一個瞬間都有其獨特的美，
                而我的使命就是用鏡頭捕捉這些美好，為客戶創造永恆的回憶。
              </p>
              <p>
                從紐約視覺藝術學院畢業後，我一直致力於提升自己的攝影技術和藝術視野。
                多年來，我拍攝過無數的婚禮、人像、商業和活動，每一次拍攝都是新的挑戰和學習機會。
              </p>
              <div className="intro-stats">
                <div className="stat">
                  <FaCamera className="stat-icon" />
                  <span>10+ 年經驗</span>
                </div>
                <div className="stat">
                  <FaAward className="stat-icon" />
                  <span>15+ 獎項</span>
                </div>
                <div className="stat">
                  <FaHeart className="stat-icon" />
                  <span>500+ 滿意客戶</span>
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
            <div className="philosophy-card">
              <FaCamera className="card-icon" />
              <h3>捕捉真實</h3>
              <p>我相信最美的照片來自於真實的情感和自然的瞬間</p>
            </div>
            <div className="philosophy-card">
              <FaHeart className="card-icon" />
              <h3>用心拍攝</h3>
              <p>每一次按下快門都是用心的選擇，為了創造最完美的作品</p>
            </div>
            <div className="philosophy-card">
              <FaGraduationCap className="card-icon" />
              <h3>不斷學習</h3>
              <p>攝影是一門永無止境的藝術，我持續學習新技術和創意</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
