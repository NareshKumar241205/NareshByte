import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticElement({
  children,
  className,
  strength = 0.3,
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const x = (clientX - centerX) * strength
    const y = (clientY - centerY) * strength
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  const MotionTag = motion[Tag] || motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </MotionTag>
  )
}
