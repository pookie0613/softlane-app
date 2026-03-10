import React from 'react'
import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies. From simple websites to complex web platforms.',
      features: ['React, Vue, Angular', 'Node.js & Express', 'Full-stack Solutions', 'Progressive Web Apps']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. Delivering seamless user experiences.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization']
    },
    {
      icon: '🖥️',
      title: 'Desktop Development',
      description: 'Powerful desktop applications for Windows, macOS, and Linux. Built for performance and reliability.',
      features: ['Electron', 'Native Desktop Apps', 'Cross-platform', 'System Integration']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love. We combine aesthetics with functionality.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: '⚡',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies. Ensuring your applications run smoothly.',
      features: ['AWS, Azure, GCP', 'DevOps & CI/CD', 'Containerization', 'Serverless Architecture']
    },
    {
      icon: '🔒',
      title: 'Security & Maintenance',
      description: 'Keep your applications secure and up-to-date with our comprehensive maintenance services.',
      features: ['Security Audits', 'Performance Optimization', 'Bug Fixes', '24/7 Support']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-description">
            Comprehensive software development solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
