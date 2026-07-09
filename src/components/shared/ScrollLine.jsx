import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollLine({ className, color }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div ref={ref} className={className} style={{ position: 'relative' }}>
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          height: 2,
          background: color || 'var(--accent)',
          borderRadius: 1,
        }}
      />
    </div>
  )
}
