import { useInView, useMotionValue, useTransform, animate, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import ScrollReveal from '../shared/ScrollReveal'
import './Stats.css'

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Projects Delivered' },
  { value: 8, suffix: '+', label: 'Technologies' },
  { value: 1, suffix: '', label: 'Research Papers' },
]

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] })
    }
  }, [isInView, count, value])

  return (
    <span ref={ref} className="stats-number">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <ScrollReveal
            key={s.label}
            preset="distort"
            delay={i * 0.1}
            as="div"
            className="stats-card glass"
          >
            <AnimatedCounter value={s.value} suffix={s.suffix} />
            <p className="stats-label">{s.label}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
