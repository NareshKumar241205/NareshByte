import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion'
import './Hero.css'

const roles = [
  "Tomorrow",
  "AI Solutions",
  "Innovation",
  "Products",
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
})

const roleVariant = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { margin: '-200px' })

  const { scrollY } = useScroll()
  const scrollYSpring = useSpring(scrollY, { stiffness: 100, damping: 30 })

  const ring1Rotate = useTransform(scrollYSpring, [0, 800], [0, 360])
  const ring2Rotate = useTransform(scrollYSpring, [0, 800], [0, -270])
  const contentY = useTransform(scrollYSpring, [0, 500], [0, 60])
  const gridOpacity = useTransform(scrollYSpring, [0, 600], [0.6, 0])
  const glow1Opacity = useTransform(scrollYSpring, [0, 600], [0.08, 0])
  const glow2Opacity = useTransform(scrollYSpring, [0, 600], [0.08, 0])

  const cycleRole = useCallback(() => {
    setRoleIndex((i) => (i + 1) % roles.length)
  }, [])

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(cycleRole, 3000)
    return () => clearInterval(interval)
  }, [isInView, cycleRole])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    let rafId = null
    const onMouse = (e) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        rafId = null
      })
    }
    const onLeave = () => setMousePos({ x: -100, y: -100 })
    hero.addEventListener('mousemove', onMouse)
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMouse)
      hero.removeEventListener('mouseleave', onLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-grid" style={{ opacity: isInView ? gridOpacity : 0.6 }} />
        <div className="hero-ring hero-ring-1" style={{ rotate: isInView ? ring1Rotate : 0 }} />
        <div className="hero-ring hero-ring-2" style={{ rotate: isInView ? ring2Rotate : 0 }} />
        <div
          className="hero-glow hero-glow-1"
          style={{ opacity: isInView ? glow1Opacity : 0.08 }}
        />
        <div
          className="hero-glow hero-glow-2"
          style={{ opacity: isInView ? glow2Opacity : 0.08 }}
        />
      </div>

      <div
        className="hero-cursor"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          opacity: mousePos.x > 0 ? 1 : 0,
        }}
      >
        <span className="hero-cursor-dot" />
      </div>

      <motion.div
        className="hero-content"
        style={{ y: contentY }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-label" variants={fadeUp(0)}>
          Naresh Kumar V
        </motion.p>

        <motion.h1 className="hero-title" variants={fadeUp(0.1)}>
          Building
          <span className="hero-role-wrap">
            <AnimatePresence mode="wait">
              <motion.span
                className="hero-role"
                key={roles[roleIndex]}
                variants={roleVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p className="hero-desc" variants={fadeUp(0.2)}>
          Architecting intelligent systems that bridge research and production.
          From training transformer models to deploying resilient APIs — I
          deliver end-to-end machine learning solutions.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUp(0.3)}>
          <Link to="/projects" className="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link to="/contact" className="btn-outline">Get in Touch</Link>
        </motion.div>

        <motion.div className="hero-social" variants={fadeUp(0.4)}>
          <span className="hero-social-line" />
          {[
            { label: 'GitHub', url: 'https://github.com/NareshKumar241205' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nareshkumar241205/' },
          ].map((s) => (
            <a key={s.label} href={s.url} className="hero-social-link" target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
