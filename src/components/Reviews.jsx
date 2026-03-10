import React from 'react'
import { motion } from 'framer-motion'
import './Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: '👩‍💼',
      rating: 5,
      text: 'SoftLane transformed our business with their exceptional web platform. The team was professional, responsive, and delivered beyond our expectations. Highly recommended!'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, MobileFirst',
      image: '👨‍💻',
      rating: 5,
      text: 'Working with SoftLane was a game-changer. They built our mobile app with incredible attention to detail and user experience. Our users love it!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, CloudSolutions',
      image: '👩‍🔬',
      rating: 5,
      text: 'The desktop application SoftLane developed for us is robust, scalable, and beautifully designed. Their technical expertise is unmatched.'
    },
    {
      name: 'David Thompson',
      role: 'Product Manager, FinTech Pro',
      image: '👨‍💼',
      rating: 5,
      text: 'SoftLane delivered a complex financial platform on time and within budget. Their security practices and code quality are top-notch.'
    },
    {
      name: 'Lisa Anderson',
      role: 'Director, HealthCare Plus',
      image: '👩‍⚕️',
      rating: 5,
      text: 'We needed a HIPAA-compliant solution, and SoftLane delivered perfectly. Their understanding of healthcare regulations was impressive.'
    },
    {
      name: 'James Wilson',
      role: 'CEO, EduTech Global',
      image: '👨‍🏫',
      rating: 5,
      text: 'Our learning management system built by SoftLane has revolutionized how we deliver education. The platform is intuitive and powerful.'
    }
  ]

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-container">
        <motion.div
          className="reviews-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-description">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="review-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="review-header">
                <div className="review-avatar">{review.image}</div>
                <div className="review-info">
                  <h4 className="review-name">{review.name}</h4>
                  <p className="review-role">{review.role}</p>
                </div>
              </div>
              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-quote">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
