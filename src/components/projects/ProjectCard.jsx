import ScrollReveal from '../shared/ScrollReveal'
import './ProjectCard.css'

export default function ProjectCard({ project, index }) {
  return (
    <ScrollReveal
      preset="scaleIn"
      delay={index * 0.08}
      as="a"
      href={project.demo || project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card glass"
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className="project-card-top">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-card-img" loading="lazy" width="400" height="225" />
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        )}
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
