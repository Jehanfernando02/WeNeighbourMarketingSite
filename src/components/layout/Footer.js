import React from 'react';
import '../../styles/layout/Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="#hero" className="logo d-flex align-items-center">
                <span>We Neighbour</span>
              </a>
              <p>
                Building stronger communities through technology. Connect with your neighbors,
                stay informed about local events, and make your neighborhood a better place.
              </p>
              <div className="social-links mt-3">
                <a href="https://twitter.com/weneighbour" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://facebook.com/weneighbour" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com/weneighbour" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://linkedin.com/company/weneighbour" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#hero">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#about">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#features">Features</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#privacy">Privacy policy</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#terms">Terms of service</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Features</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#features#events">Community Events</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#features#chat">Neighborhood Chat</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#features#marketplace">Local Marketplace</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#features#safety">Safety Alerts</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#features#directory">Resident Directory</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                123 Community Street <br />
                San Francisco, CA 94105<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 234 567 8900<br />
                <strong>Email:</strong> hello@weneighbour.com<br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>We Neighbour</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            <div className="download-buttons">
              <a href="#" className="btn-download">
                <i className="bi bi-google-play"></i> Google Play
              </a>
              <a href="#" className="btn-download">
                <i className="bi bi-apple"></i> App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
