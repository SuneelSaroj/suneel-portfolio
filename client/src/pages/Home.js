import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
          <div className="tech-grid"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Suneel Saroj</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer & Tech Enthusiast</p>
            <p className="hero-description">
              I create innovative web solutions using cutting-edge technologies. 
              Passionate about building scalable applications that make a difference.
            </p>
            <div className="hero-buttons">
              <div className="button-wrapper">
                <Link to="/projects" className="btn btn-primary">View My Work</Link>
              </div>
              <div className="button-wrapper">
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="code-animation">
              <div className="code-container">
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-content">
                                      <pre><code>{`const developer = {
  name: "Suneel Saroj",
  passion: "Full Stack Development",
  skills: ["React", "Node.js", "PostgreSQL","Express"]
}`}</code></pre>
                </div>
              </div>
            </div>
            <div className="tech-showcase">
              <div className="tech-icon tech-react">
                <div className="icon-bg"></div>
                <span>⚛️</span>
              </div>
              <div className="tech-icon tech-node">
                <div className="icon-bg"></div>
                <span>🟢</span>
              </div>
              <div className="tech-icon tech-mongo">
                <div className="icon-bg"></div>
                <span>🍃</span>
              </div>
              <div className="tech-icon tech-js">
                <div className="icon-bg"></div>
                <span>🟡</span>
              </div>
              <div className="tech-icon tech-css">
                <div className="icon-bg"></div>
                <span>💙</span>
              </div>
              <div className="tech-icon tech-html">
                <div className="icon-bg"></div>
                <span>🟠</span>
              </div>
            </div>
            {/* <div className="connection-lines"></div> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Expertise</h2>
            <p>Mastering the technologies that power modern web applications</p>
          </div>
          
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>Frontend Development</h3>
              <div className="skill-category">React, HTML, CSS, JavaScript</div>
              <p>Building responsive and interactive user interfaces</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">🟢</div>
              <h3>Backend Development</h3>
              <div className="skill-category">Node.js, Express, Python, Java, C++, Rest API, WebSocket</div>
              <p>Creating robust server-side applications</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">🍃</div>
              <h3>Database & Cloud</h3>
              <div className="skill-category">PostgreSQL, MongoDB, AWS, Docker</div>
              <p>Managing data and deploying scalable solutions</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">🔧</div>
              <h3>DevOps & Tools</h3>
              <div className="skill-category">Git, Nginx,Redis, Postman </div>
              <p>Streamlining development and deployment processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {/* <section className="featured-projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Showcasing my best work and technical achievements</p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop" alt="E-commerce Platform" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" title="Live Demo">🌐</a>
                    <a href="#" title="Source Code">📁</a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>E-commerce Platform</h3>
                <p>A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.</p>
                <div className="project-technologies">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Stripe</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop" alt="Task Management App" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" title="Live Demo">🌐</a>
                    <a href="#" title="Source Code">📁</a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>A collaborative task management application with real-time updates, team collaboration, and progress tracking features.</p>
                <div className="project-technologies">
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">Socket.io</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">PostgreSQL</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop" alt="Portfolio Website" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" title="Live Demo">🌐</a>
                    <a href="#" title="Source Code">📁</a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>A modern, responsive portfolio website built with React and styled-components. Features dark/light theme toggle and smooth animations.</p>
                <div className="project-technologies">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Styled Components</span>
                  <span className="tech-tag">Framer Motion</span>
                  <span className="tech-tag">CSS Grid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's collaborate on your next project and bring your ideas to life with cutting-edge technology.</p>
            <Link to="/contact" className="btn btn-primary">Start a Project</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
