import { motion } from 'framer-motion'
import './ProjectFilter.css'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'AI/ML', value: 'ml' },
  { label: 'Web Dev', value: 'web' },
]

export default function ProjectFilter({ active, onChange }) {
  return (
    <div className="project-filters">
      {filters.map((f) => (
        <button
          key={f.value}
          className={`filter-btn ${active === f.value ? 'active' : ''}`}
          onClick={() => onChange(f.value)}
        >
          {active === f.value && (
            <motion.div
              className="filter-active"
              layoutId="filter-bg"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="filter-label">{f.label}</span>
        </button>
      ))}
    </div>
  )
}
