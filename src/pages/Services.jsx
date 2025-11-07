// Services page component
import { motion } from 'framer-motion';
import { FaCamera, FaCheck, FaClock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import portfolioConfig from '../config/portfolio.config.js';
import './Services.css';

const Services = () => {
  const { services, processSteps } = portfolioConfig;

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