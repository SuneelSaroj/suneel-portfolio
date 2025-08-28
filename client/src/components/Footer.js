import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Footer Wave Decoration */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.71,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          {/* Main Footer Sections */}
          <div className="footer-sections">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">⚛️</div>
                <h3>Suneel Saroj</h3>
              </div>
              <p className="footer-description">
                Full Stack Developer passionate about creating innovative web solutions 
                and delivering exceptional user experiences with cutting-edge technology.
              </p>
              <div className="footer-stats">
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About</Link></li>
                <li><Link to="/projects" className="footer-link">Projects</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
              <div className="footer-divider"></div>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Resume</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Services</a></li>
                <li><a href="#" className="footer-link">Testimonials</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Web Development</a></li>
                <li><a href="#" className="footer-link">Mobile Apps</a></li>
                <li><a href="#" className="footer-link">UI/UX Design</a></li>
                <li><a href="#" className="footer-link">Consulting</a></li>
                <li><a href="#" className="footer-link">Maintenance</a></li>
                <li><a href="#" className="footer-link">Performance Optimization</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Get In Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <a href="mailto:hello@suneelsaroj.com" className="contact-value">hello@suneelsaroj.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">India</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">💼</div>
                  <div className="contact-details">
                    <span className="contact-label">Available for</span>
                    <span className="contact-value">Freelance & Full-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div className="footer-bottom">
            <div className="social-section">
              <div className="corner-dot top-left"></div>
              <div className="corner-dot top-right"></div>
              <div className="corner-dot bottom-left"></div>
              <div className="corner-dot bottom-right"></div>
              <div className="floating-tech tech-1">⚛️</div>
              <div className="floating-tech tech-2">🟢</div>
              <div className="floating-tech tech-3">🍃</div>
              <div className="floating-tech tech-4">💻</div>
              <h4>Connect With Me</h4>
              <div className="social-links">
                <a href="#" className="social-link" title="GitHub">
                  <div className="border-left"></div>
                  <div className="border-right"></div>
                  <div className="corner-top-left"></div>
                  <div className="corner-top-right"></div>
                  <div className="corner-bottom-left"></div>
                  <div className="corner-bottom-right"></div>
                  <div className="social-icon">🐙</div>
                  <span>GitHub</span>
                </a>
                <a href="#" className="social-link" title="LinkedIn">
                  <div className="border-left"></div>
                  <div className="border-right"></div>
                  <div className="corner-top-left"></div>
                  <div className="corner-top-right"></div>
                  <div className="corner-bottom-left"></div>
                  <div className="corner-bottom-right"></div>
                  <div className="social-icon">💼</div>
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="social-link" title="Twitter">
                  <div className="border-left"></div>
                  <div className="border-right"></div>
                  <div className="corner-top-left"></div>
                  <div className="corner-top-right"></div>
                  <div className="corner-bottom-left"></div>
                  <div className="corner-bottom-right"></div>
                  <div className="social-icon">🐦</div>
                  <span>Twitter</span>
                </a>
                <a href="#" className="social-link" title="Instagram">
                  <div className="border-left"></div>
                  <div className="border-right"></div>
                  <div className="corner-top-left"></div>
                  <div className="corner-top-right"></div>
                  <div className="corner-bottom-left"></div>
                  <div className="corner-bottom-right"></div>
                  <div className="social-icon">📸</div>
                  <span>Instagram</span>
                </a>
                <a href="#" className="social-link" title="YouTube">
                  <div className="border-left"></div>
                  <div className="border-right"></div>
                  <div className="corner-top-left"></div>
                  <div className="corner-top-right"></div>
                  <div className="corner-bottom-left"></div>
                  <div className="corner-bottom-right"></div>
                  <div className="social-icon">📺</div>
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            <div className="newsletter-section">
              <h4>Stay Updated</h4>
              <p>Get the latest tech insights and project updates</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bar">
            <div className="footer-bar-content">
              <div className="copyright">
                <span>© {currentYear} Suneel Saroj. All rights reserved.</span>
              </div>
              <div className="footer-legal">
                <a href="#" className="legal-link">Privacy Policy</a>
                <a href="#" className="legal-link">Terms of Service</a>
                <a href="#" className="legal-link">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Elements */}
      <div className="footer-tech-elements">
        <div className="tech-element tech-1">⚛️</div>
        <div className="tech-element tech-2">🟢</div>
        <div className="tech-element tech-3">🍃</div>
        <div className="tech-element tech-4">💻</div>
        <div className="tech-element tech-5">🔧</div>
      </div>
    </footer>
  );
};

export default Footer;
