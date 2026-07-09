import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectFilter from '../components/projects/ProjectFilter'
import ProjectCard from '../components/projects/ProjectCard'
import projects from '../data/projects'
import SEO from '../components/shared/SEO'
import './Projects.css'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <div className="page-container">
      <SEO
        title="Projects"
        description="A selection of AI/ML and software engineering projects — from research prototypes to production systems."
      />
      <motion.h1
        className="page-heading"
        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <ProjectFilter active={filter} onChange={setFilter} />

      <div className="projects-grid">
        <AnimatePresence mode="wait">
          {filtered.map((p, i) => (
            <ProjectCard key={`${filter}-${p.id}`} project={p} index={i} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="projects-empty">No projects in this category yet.</p>
      )}
    </div>
  )
}
