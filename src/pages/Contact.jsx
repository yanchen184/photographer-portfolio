// Contact page component
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import portfolioConfig from '../config/portfolio.config.js';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: portfolioConfig.services[0].title,
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const { contact, socialMedia, services } = portfolioConfig;

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
        service: services[0].title,
        date: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 2000);
  };

  // Contact information from config
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: '電話',
      content: contact.phone,
      link: `tel:${contact.phone.replace(/\s/g, '')}`
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: contact.email,
      link: `mailto:${contact.email}`
    },
    {
      icon: <FaMapMarkerAlt />,
      title: '地址',
      content: contact.address,
      link: 'https://maps.google.com'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      content: contact.whatsapp,
      link: `https://wa.me/${contact.whatsapp.replace(/\s|\+/g, '')}`
    }
  ];

  // Social media links from config
  const socialLinks = [
    { icon: <FaFacebook />, url: socialMedia.facebook, label: 'Facebook' },
    { icon: <FaInstagram />, url: socialMedia.instagram, label: 'Instagram' },
    { icon: <FaTwitter />, url: socialMedia.twitter, label: 'Twitter' }
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
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
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
                  {contact.businessHours.map((hour, index) => (
                    <li key={index}>{hour.day}: {hour.hours}</li>
                  ))}
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
                src={contact.googleMapsEmbed}
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