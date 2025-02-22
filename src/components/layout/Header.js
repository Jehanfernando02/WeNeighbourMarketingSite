import React, { useState, useEffect } from 'react';
import '../../styles/layout/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    document.body.style.overflow = !isMobileNavActive ? 'hidden' : 'auto';
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center" onClick={closeMobileNav}>
          <img src="/assets/img/logo.jpeg" alt="We Neighbour" />
          <span>We Neighbour</span>
        </a>

        <i
          className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
          onClick={toggleMobileNav}
        ></i>

        <nav className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li>
              <a href="#hero" onClick={closeMobileNav}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMobileNav}>
                About
              </a>
            </li>
            <li>
              <a href="#features" onClick={closeMobileNav}>
                Features
              </a>
            </li>
            <li>
              <a href="#team" onClick={closeMobileNav}>
                Team
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileNav}>
                Contact
              </a>
            </li>
            <li>
              <a href="#download" className="get-started" onClick={closeMobileNav}>
                Download App
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
