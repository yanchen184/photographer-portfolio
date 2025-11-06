// Services page component
import { motion } from 'framer-motion';
import { FaCamera, FaCheck, FaClock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: '婚禮攝影',
      icon: '💒',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600',
      description: '記錄您人生中最重要的一天',
      features: [
        '全天候拍攝服務',
        '婚前諮詢與場地勘察',
        '專業後製修圖',
        '精美相冊製作',
        '線上相片瀏覽平台'
      ],
      packages: [
        { name: '基本套餐', price: 'NT$ 30,000', hours: '6小時' },
        { name: '標準套餐', price: 'NT$ 50,000', hours: '10小時' },
        { name: '豪華套餐', price: 'NT$ 80,000', hours: '全天' }
      ]
    },
    {
      id: 2,
      title: '人像攝影',
      icon: '👤',
      image: 'https://images.unsplash.com/photo-1543226589-56c77d9aef16?w=800',
      description: '展現您最美的一面',
      features: [
        '專業形象照拍攝',
        '個人寫真',
        '家庭照',
        '孕婦寫真',
        '專業修圖服務'
      ],
      packages: [
        { name: '個人寫真', price: 'NT$ 8,000', hours: '2小時' },
        { name: '家庭套餐', price: 'NT$ 12,000', hours: '3小時' },
        { name: '專業形象', price: 'NT$ 15,000', hours: '4小時' }
      ]
    },
    {
      id: 3,
      title: '商業攝影',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?w=600',
      description: '提升您的品牌形象',
      features: [
        '產品攝影',
        '企業形象照',
        '廣告拍攝',
        '電商平台用圖',
        '品牌視覺設計'
      ],
      packages: [
        { name: '產品拍攝', price: 'NT$ 20,000', hours: '起' },
        { name: '企業形象', price: 'NT$ 35,000', hours: '起' },
        { name: '廣告拍攝', price: '客製報價', hours: '' }
      ]
    },
    {
      id: 4,
      title: '活動攝影',
      icon: '🎉',
      image: 'https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?w=600',
      description: '完整記錄精彩活動',
      features: [
        '企業活動',
        '演唱會',
        '記者會',
        '派對慶典',
        '即時照片分享'
      ],
      packages: [
        { name: '半天套餐', price: 'NT$ 15,000', hours: '4小時' },
        { name: '全天套餐', price: 'NT$ 25,000', hours: '8小時' },
        { name: '多日活動', price: '客製報價', hours: '' }
      ]
    }
  ];

  // Process steps
  const processSteps = [
    { icon: '📞', title: '初步諮詢', description: '了解您的需求和期望' },
    { icon: '📝', title: '方案制定', description: '提供客製化的拍攝方案' },
    { icon: '📸', title: '專業拍攝', description: '用心記錄每個珍貴時刻' },
    { icon: '✨', title: '後製處理', description: '精心修圖確保完美呈現' },
    { icon: '📦', title: '作品交付', description: '提供高品質的成品' }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>服務項目</h1>
        <p>專業攝影服務，滿足您的各種需求</p>
      </div>

      {/* Services Grid */}
      <section className="services-grid">
        <div className="container">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon">{service.icon}</div>
              </div>
              <div className="service-content">
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h3>服務包含</h3>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheck className="check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-packages">
                  <h3>套餐方案</h3>
                  <div className="packages-grid">
                    {service.packages.map((pkg, idx) => (
                      <div key={idx} className="package-item">
                        <h4>{pkg.name}</h4>
                        <p className="package-price">{pkg.price}</p>
                        {pkg.hours && (
                          <p className="package-hours">
                            <FaClock /> {pkg.hours}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="service-cta">
                  <FaEnvelope /> 立即諮詢
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process">
        <div className="container">
          <h2>服務流程</h2>
          <p className="section-subtitle">簡單五步驟，打造完美作品</p>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="step-arrow">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>準備好開始了嗎？</h2>
          <p>讓我們一起創造美好的影像故事</p>
          <Link to="/contact" className="btn-primary">
            取得報價
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
