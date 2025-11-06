// Navigation bar component for the photographer portfolio
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCamera } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  console.log('%c✅ Navbar rendered successfully', 'color: #f77062; font-size: 14px; font-weight: bold;');

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Navigation links data
  const navLinks = [
    { path: '/', label: '首頁' },
    { path: '/portfolio', label: '作品集' },
    { path: '/about', label: '關於我' },
    { path: '/services', label: '服務項目' },
    { path: '/contact', label: '聯絡我' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <FaCamera className="logo-icon" />
          <span>John Photography</span>
        </Link>

        {/* Mobile menu button */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation menu */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <Link
                to={link.path}
                className={isActive(link.path) ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
