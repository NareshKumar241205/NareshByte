import { motion } from 'framer-motion'
import './SectionDivider.css'

export default function SectionDivider() {
  return (
    <div className="section-divider">
      <motion.div
        className="section-divider-line"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '60%', opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  )
}
