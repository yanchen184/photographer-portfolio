// Footer component for the photographer portfolio
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links data
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section">
          <h3>聯絡資訊</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>台北市信義區攝影街123號</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+886 2 1234 5678</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@johnphotography.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>快速連結</h3>
          <ul className="footer-links">
            <li><a href="/portfolio">作品集</a></li>
            <li><a href="/services">服務項目</a></li>
            <li><a href="/about">關於我</a></li>
            <li><a href="/contact">聯絡我</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>服務項目</h3>
          <ul className="footer-links">
            <li>婚禮攝影</li>
            <li>人像攝影</li>
            <li>商業攝影</li>
            <li>活動攝影</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>社群媒體</h3>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="newsletter-text">訂閱電子報獲取最新作品</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="輸入您的Email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              訂閱
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} John Photography. 版權所有</p>
      </div>
    </footer>
  );
};

export default Footer;
