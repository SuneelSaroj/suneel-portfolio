import React from 'react';
import './About.css';
import suneel from '../assets/sunilphoto.jpg';

const About = () => {
  return (
    <div className="about">
      {/* About Header */}
      <section className="about-header">
        <div className="container">
          <div className="header-content">
            <h1>About Me</h1>
            <p>Passionate developer crafting digital experiences with cutting-edge technology</p>
          </div>
          <div className="header-graphics">
            <div className="floating-tech-icons">
              <div className="tech-icon-bg tech-icon-1">⚛️</div>
              <div className="tech-icon-bg tech-icon-2">🟢</div>
              <div className="tech-icon-bg tech-icon-3">🍃</div>
              <div className="tech-icon-bg tech-icon-4">💻</div>
              <div className="tech-icon-bg tech-icon-5">🔧</div>
            </div>
            <div className="tech-connections"></div>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="personal-info">
        <div className="container">
          <div className="info-grid">
            <div className="personal-image">
              <div className="image-blur">
                <img src={suneel} alt="Suneel Saroj" className="image-blur" />
              </div>
              <div className="image-overlay">
                <div className="tech-particles">
                  <span className="particle">⚛️</span>
                  <span className="particle">🟢</span>
                  <span className="particle">🍃</span>
                </div>
              </div>
              {/* Floating Tech Elements */}
              <div className="floating-tech tech-1">⚛️</div>
              <div className="floating-tech tech-2">🟢</div>
              <div className="floating-tech tech-3">💻</div>
              <div className="floating-tech tech-4">🔧</div>
            </div>
            <div className="personal-details">
              <h2>Hello, I'm Suneel Saroj</h2>
              <div className="title">Full Stack Developer</div>
              <p className="bio">
                A passionate developer with expertise in modern web technologies. 
                I love creating innovative solutions that solve real-world problems 
                and deliver exceptional user experiences.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="experience-section">
        <div className="container">
          <div className="section-header">
            <h2>Professional Journey</h2>
            <p>My path in software development and technology</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-icon">💼</div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <h4>Star Tech Software Pvt Ltd</h4>
                <p>Leading development teams in building scalable web applications using React, Node.js, Java, PostgreSQL, NGINX, Docker, and other technologies.</p>
                <div className="timeline-technologies">
                  <span className="tech-tag">
                    <span className="tech-icon">⚛️</span>
                    <span className="tech-text">React</span>
                  </span>
                  <span className="tech-tag">
                    <span className="tech-icon">🟢</span>
                    <span className="tech-text">Node.js</span>
                  </span>
                  <span className="tech-tag">
                    <span className="tech-icon">☕</span>
                    <span className="tech-text">Java</span>
                  </span>
                  <span className="tech-tag">
                    <span className="tech-icon">🐘</span>
                    <span className="tech-text">PostgreSQL</span>
                  </span>
                  <span className="tech-tag">
                    <span className="tech-icon">🌐</span>
                    <span className="tech-text">NGINX</span>
                  </span>
                  <span className="tech-tag">
                    <span className="tech-icon">🐳</span>
                    <span className="tech-text">Docker</span>
                  </span>
               
                </div>
              </div>
            </div>
            {/* <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-icon">🚀</div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <h4>Digital Innovations</h4>
                <p>Developed and maintained multiple web applications, focusing on performance optimization and user experience.</p>
                <div className="timeline-technologies">
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Docker</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-icon">🎓</div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <h3>Junior Developer</h3>
                <h4>Startup Studio</h4>
                <p>Started my journey in web development, learning modern frameworks and best practices.</p>
                <div className="timeline-technologies">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">HTML/CSS</span>
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">MySQL</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education-section">
        <div className="container">
          <div className="section-header">
            <h2>Education</h2>
            <p>My academic background and continuous learning</p>
          </div>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3>Bachelor of Technology</h3>
              <h4>Computer Science & Engineering</h4>
              <p>IIT Jodhpur</p>
              <div className="education-period">2019 - 2023</div>
              <div className="education-highlights">
                <span className="highlight-tag">
                  <span className="highlight-icon">📊</span>
                  <span className="highlight-text">Data Structures</span>
                </span>
                <span className="highlight-tag">
                  <span className="highlight-icon">🧮</span>
                  <span className="highlight-text">Algorithms</span>
                </span>
                <span className="highlight-tag">
                  <span className="highlight-icon">🌐</span>
                  <span className="highlight-text">Networking</span>
                </span>
                <span className="highlight-tag">
                  <span className="highlight-icon">💻</span>
                  <span className="highlight-text">Operating Systems</span>
                </span>
                <span className="highlight-tag">
                  <span className="highlight-icon">🗄️</span>
                  <span className="highlight-text">Database Systems</span>
                </span>
              </div>
            </div>
            {/* <div className="education-card">
              <div className="education-icon">📚</div>
              <h3>Online Certifications</h3>
              <h4>Continuous Learning</h4>
              <p>Various Platforms</p>
              <div className="education-period">2020 - Present</div>
                             <div className="education-highlights">
                 <span className="highlight-tag">
                   <span className="highlight-icon">☁️</span>
                   <span className="highlight-text">AWS Certified</span>
                 </span>
                 <span className="highlight-tag">
                   <span className="highlight-icon">⚛️</span>
                   <span className="highlight-text">React Advanced</span>
                 </span>
                 <span className="highlight-tag">
                   <span className="highlight-icon">🟢</span>
                   <span className="highlight-text">Node.js Mastery</span>
                 </span>
                 <span className="highlight-tag">
                   <span className="highlight-icon">🔧</span>
                   <span className="highlight-text">DevOps Practices</span>
                 </span>
               </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Skills & Technologies</h2>
            <p>Technologies I work with and continue to master</p>
          </div>
          
          <div className="skills-container">
            {/* Frontend Development */}
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">⚛️</div>
                <h3>Frontend Development</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">⚛️</div>
                  <span>React</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🟨</div>
                  <span>JavaScript</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🌐</div>
                  <span>HTML/CSS</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🎨</div>
                  <span>MUI</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">🟢</div>
                <h3>Backend Development</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">🟢</div>
                  <span>Node.js</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔌</div>
                  <span>Rest API</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">☕</div>
                  <span>Java</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔷</div>
                  <span>C++</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">🍃</div>
                <h3>Database & Cloud</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">🍃</div>
                  <span>MongoDB</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🐘</div>
                  <span>PostgreSQL</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">☁️</div>
                  <span>AWS</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🐳</div>
                  <span>Docker</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '82%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">🔧</div>
                <h3>DevOps & Tools</h3>
              </div>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">📦</div>
                  <span>Nginx</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔀</div>
                  <span>Git</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">⚡</div>
                  <span>Postman</span>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '80%'}}></div>
                  </div>
                </div>
                                 <div className="skill-item">
                   <div className="skill-icon">🔴</div>
                   <span>Redis</span>
                   <div className="skill-level">
                     <div className="skill-bar" style={{width: '75%'}}></div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="hobbies-section">
        <div className="container">
          <div className="section-header">
            <h2>Beyond Coding</h2>
            <p>What keeps me inspired and balanced</p>
          </div>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <div className="hobby-icon">📚</div>
              <h3>Reading</h3>
              <p>Exploring tech books, sci-fi novels, and industry publications to stay updated and inspired.</p>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">🎮</div>
              <h3>Gaming</h3>
              <p>Strategic games and puzzle-solving challenges that enhance problem-solving skills.</p>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">🏃‍♂️</div>
              <h3>Fitness</h3>
              <p>Maintaining physical health through regular exercise and outdoor activities.</p>
            </div>
                         <div className="hobby-card">
               <div className="hobby-icon">🎵</div>
               <h3>Music</h3>
               <p>Listening to various genres while coding to maintain focus and creativity.</p>
             </div>
             <div className="hobby-card">
               <div className="hobby-icon">🏏</div>
               <h3>Cricket</h3>
                               <p>I like to play cricket and follow matches, enjoying the excitement of the game and supporting my favorite teams.</p>
             </div>
             <div className="hobby-card">
               <div className="hobby-icon">🎬</div>
               <h3>Movies</h3>
               <p>I like to watch movies, web series, and anime across different genres for entertainment and inspiration.</p>
             </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="cta-section">
        {/* Floating Tech Icons */}
        <div className="floating-tech-icon tech-1">⚛️</div>
        <div className="floating-tech-icon tech-2">🟢</div>
        <div className="floating-tech-icon tech-3">💻</div>
        <div className="floating-tech-icon tech-4">🔧</div>
        
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's discuss your project and bring your ideas to life with cutting-edge technology.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get In Touch</a>
              <a href="/projects" className="btn btn-secondary">View My Work</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
