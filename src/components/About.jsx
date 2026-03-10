import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years Experience' }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              About <span className="gradient-text">SoftLane</span>
            </h2>
            <p className="about-description">
              We are a passionate team of developers, designers, and innovators dedicated to
              transforming ideas into exceptional digital experiences. With years of experience
              in web, mobile, and desktop development, we've helped businesses of all sizes
              achieve their digital goals.
            </p>
            <p className="about-description">
              Our approach combines cutting-edge technology with creative problem-solving,
              ensuring that every project we deliver not only meets but exceeds expectations.
              We believe in building long-term partnerships with our clients, providing ongoing
              support and continuous improvement.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div>
                  <h4>Innovation First</h4>
                  <p>We stay ahead of the curve with the latest technologies</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💎</div>
                <div>
                  <h4>Quality Focused</h4>
                  <p>Every line of code is crafted with precision and care</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <div>
                  <h4>Client Centric</h4>
                  <p>Your success is our success - we're in this together</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="visual-card">
              <div className="code-block">
                <div className="code-line">
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">softlane</span> = {'{'}
                </div>
                <div className="code-line indent">
                  <span className="code-property">mission</span>:{' '}
                  <span className="code-string">'Transform Ideas'</span>,
                </div>
                <div className="code-line indent">
                  <span className="code-property">vision</span>:{' '}
                  <span className="code-string">'Digital Excellence'</span>,
                </div>
                <div className="code-line indent">
                  <span className="code-property">passion</span>:{' '}
                  <span className="code-number">100</span>
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
