import { motion } from 'framer-motion'

const presets = {
  clipReveal: {
    initial: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
    whileInView: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
  },
  distort: {
    initial: { opacity: 0, scale: 0.92, filter: 'blur(4px)', y: 20 },
    whileInView: { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 },
  },
  tilt3D: {
    initial: { opacity: 0, rotateX: 4, rotateY: -3, scale: 0.92 },
    whileInView: { opacity: 1, rotateX: 0, rotateY: 0, scale: 1 },
  },
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  },
  reveal: {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.92 },
    whileInView: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
  },
}

export default function ScrollReveal({
  children,
  preset = 'fadeUp',
  as: Tag = 'div',
  className,
  delay = 0,
  ...props
}) {
  const p = presets[preset] || presets.fadeUp
  const MotionTag = motion[Tag] || motion.div

  return (
    <MotionTag
      initial={p.initial}
      whileInView={p.whileInView}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
