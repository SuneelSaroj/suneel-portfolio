import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      setStatus({
        type: 'success',
        message: response.data.message
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Get In Touch</h1>
            <p>Ready to start your project? Let's discuss how I can help bring your ideas to life</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <motion.div 
            className="contact-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Form */}
            <motion.div className="contact-form-container" variants={itemVariants}>
              <div className="form-header">
                <h2>Send a Message</h2>
                <p>Fill out the form below and I'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                    <span>{status.message}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div className="contact-info-container" variants={itemVariants}>
              <div className="contact-info">
                <h2>Let's Connect</h2>
                <p>
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="contact-methods">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-method">
                      <div className="contact-icon">{info.icon}</div>
                      <div className="contact-details">
                        <h3>{info.title}</h3>
                        {info.link ? (
                          <a href={info.link}>{info.value}</a>
                        ) : (
                          <span>{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="contact-cta">
                  <h3>Available for:</h3>
                  <ul>
                    <li>Web Application Development</li>
                    <li>Mobile App Development</li>
                    <li>API Development</li>
                    <li>Website Redesign</li>
                    <li>Technical Consulting</li>
                  </ul>
                </div>

                <div className="response-time">
                  <h4>Response Time</h4>
                  <p>I typically respond within 24 hours during business days</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about working together</p>
          </motion.div>

          <motion.div 
            className="faq-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="faq-item" variants={itemVariants}>
              <h3>What is your typical project timeline?</h3>
              <p>
                Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, 
                while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.
              </p>
            </motion.div>

            <motion.div className="faq-item" variants={itemVariants}>
              <h3>Do you provide ongoing support after launch?</h3>
              <p>
                Yes! I offer various support packages including maintenance, updates, and technical support. 
                We can discuss the level of support that best fits your needs.
              </p>
            </motion.div>

            <motion.div className="faq-item" variants={itemVariants}>
              <h3>What technologies do you specialize in?</h3>
              <p>
                I specialize in modern web technologies including React, Node.js, MongoDB, and various cloud platforms. 
                I'm always learning new technologies and can adapt to your specific requirements.
              </p>
            </motion.div>

            <motion.div className="faq-item" variants={itemVariants}>
              <h3>How do you handle project communication?</h3>
              <p>
                I maintain clear communication throughout the project with regular updates, progress reports, 
                and scheduled check-ins. I'm available via email, phone, and video calls as needed.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
