// Contact page component
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'wedding',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('感謝您的訊息！我們會盡快與您聯繫。');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'wedding',
        date: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 2000);
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: '電話',
      content: '+886 2 1234 5678',
      link: 'tel:+886212345678'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@johnphotography.com',
      link: 'mailto:info@johnphotography.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: '地址',
      content: '台北市信義區攝影街123號',
      link: 'https://maps.google.com'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      content: '+886 912 345 678',
      link: 'https://wa.me/886912345678'
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>聯絡我們</h1>
        <p>讓我們開始創造美好的影像</p>
      </div>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>傳送訊息</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">姓名 *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="請輸入您的姓名"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">電話</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0912-345-678"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">服務類型 *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="wedding">婚禮攝影</option>
                      <option value="portrait">人像攝影</option>
                      <option value="commercial">商業攝影</option>
                      <option value="event">活動攝影</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="date">預定日期</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">訊息內容 *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="請描述您的需求..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '傳送中...' : '傳送訊息'}
                </button>

                {submitMessage && (
                  <motion.p
                    className="submit-message success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>聯絡資訊</h2>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-info-item"
                    target={info.title === '地址' ? '_blank' : undefined}
                    rel={info.title === '地址' ? 'noopener noreferrer' : undefined}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      <p>{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-section">
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
              </div>

              <div className="business-hours">
                <h3>營業時間</h3>
                <ul>
                  <li>週一至週五: 09:00 - 18:00</li>
                  <li>週六: 10:00 - 16:00</li>
                  <li>週日: 預約制</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            className="map-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>工作室位置</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7015096194024!2d121.56073631544666!3d25.044183783965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d93249%3A0xd508f7b3aa02d931!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1635959435073!5m2!1sen!2stw"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Studio Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
