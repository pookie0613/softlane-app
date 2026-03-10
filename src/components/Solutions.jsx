import React from 'react'
import { motion } from 'framer-motion'
import './Solutions.css'

const Solutions = () => {
  const solutions = [
    {
      title: 'E-Commerce Platforms',
      description: 'Complete online store solutions with payment integration, inventory management, and analytics.',
      icon: '🛒',
      color: '#6366f1'
    },
    {
      title: 'SaaS Applications',
      description: 'Scalable software-as-a-service platforms with subscription management and multi-tenancy.',
      icon: '☁️',
      color: '#8b5cf6'
    },
    {
      title: 'Enterprise Software',
      description: 'Custom enterprise solutions for large organizations with complex requirements.',
      icon: '🏢',
      color: '#ec4899'
    },
    {
      title: 'FinTech Solutions',
      description: 'Secure financial technology applications with compliance and security at the core.',
      icon: '💳',
      color: '#10b981'
    },
    {
      title: 'Healthcare Apps',
      description: 'HIPAA-compliant healthcare applications for providers and patients.',
      icon: '🏥',
      color: '#3b82f6'
    },
    {
      title: 'EdTech Platforms',
      description: 'Interactive learning management systems and educational technology solutions.',
      icon: '📚',
      color: '#f59e0b'
    }
  ]

  return (
    <section id="solutions" className="solutions">
      <div className="solutions-container">
        <motion.div
          className="solutions-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Industry <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-description">
            Tailored software solutions for various industries and business needs
          </p>
        </motion.div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="solution-icon-wrapper">
                <div className="solution-icon" style={{ '--icon-color': solution.color }}>
                  {solution.icon}
                </div>
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <motion.button
                className="solution-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--button-color': solution.color }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
