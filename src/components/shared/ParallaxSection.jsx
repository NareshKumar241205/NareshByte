import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection({
  children,
  className,
  speed = 0.15,
  direction = 'up',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const range = direction === 'up' ? [-50 * speed, 50 * speed] : [50 * speed, -50 * speed]
  const y = useTransform(scrollYProgress, [0, 1], range)

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
