import { motion } from 'framer-motion'
import ScrollReveal from '../shared/ScrollReveal'
import './AboutHero.css'

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Delivered', value: '15+' },
  { label: 'Models Deployed', value: '10+' },
]

export default function AboutHero() {
  return (
    <div className="about-hero">
      <ScrollReveal preset="reveal" as="div" className="about-hero-content">
        <div className="about-hero-image">
          <img
            src="/profile.jpg"
            alt="Naresh Kumar V"
            className="about-hero-img"
            width="180"
            height="180"
          />
        </div>

        <div className="about-hero-text">
          <motion.p
            className="about-hero-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.p>
          <motion.h1
            className="about-hero-name"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Naresh Kumar V
          </motion.h1>
          <motion.p
            className="about-hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI/ML Engineer
          </motion.p>

          <motion.div
            className="about-hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="about-stat">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </ScrollReveal>
    </div>
  )
}
