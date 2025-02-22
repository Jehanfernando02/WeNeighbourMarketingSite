import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sections/Hero.css';


const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-up">
            <h1>Strengthen your neighborhood connections with We Neighbour!</h1>
            <p>
              Join your local community, stay connected with neighbors, and make your neighborhood a better place to live.
            </p>
            <div className="hero-cta">
              <a href="#" className="btn-get-started">
                <i className="bi bi-google-play"></i> Google Play
              </a>
              <a href="#" className="btn-learn-more">
                <i className="bi bi-apple"></i> App Store
              </a>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="hero-images">
              <div className="hero-image main">
                <img
                  src="/assets/img/Screenshot 2024-11-20 at 03.27.07.png"
                  alt="We Neighbour App Main"
                  className="img-fluid"
                />
              </div>
              <div className="hero-image secondary">
                <img
                  src="/assets/img/Screenshot 2024-11-20 at 03.27.16.png"
                  alt="We Neighbour App Features"
                  className="img-fluid"
                />
              </div>
              <div className="hero-shape">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="var(--accent-color)"
                    d="M47.5,-57.5C62.2,-46.6,75.2,-31.6,79.1,-14.2C83,3.3,77.8,23.2,66.4,37.8C55,52.4,37.4,61.7,18.3,67.5C-0.8,73.3,-21.4,75.5,-39.2,68.6C-57,61.7,-72,45.7,-77.7,26.5C-83.4,7.3,-79.8,-15.1,-69.1,-31.9C-58.5,-48.7,-40.8,-59.8,-23.7,-69.1C-6.6,-78.3,9.8,-85.7,25.5,-81.2C41.2,-76.7,56.2,-60.4,47.5,-57.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
