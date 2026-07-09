import { Link } from 'react-router-dom'
import projects from '../../data/projects'
import ScrollReveal from '../shared/ScrollReveal'
import TextReveal from '../shared/TextReveal'
import './FeaturedProjects.css'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="featured">
      <ScrollReveal preset="distort" as="div" className="featured-header">
        <TextReveal as="h2" className="section-heading">Featured Work</TextReveal>
        <div className="accent-line" />
        <p className="section-sub">
          A selection of projects that showcase my approach to solving complex
          problems with clean, intelligent systems.
        </p>
      </ScrollReveal>

      <div className="featured-grid">
        {featured.map((p, i) => (
          <ScrollReveal
            key={p.id}
            preset="tilt3D"
            delay={i * 0.12}
            as="a"
            href={p.demo || p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-card glass"
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <div className="featured-card-top">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div className="featured-card-body">
              <h3 className="featured-card-title">{p.title}</h3>
              <p className="featured-card-desc">{p.description}</p>
              <div className="featured-card-tags">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="featured-tag">{t}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal preset="fadeUp" delay={0.3} as="div" className="featured-cta">
        <Link to="/projects" className="btn-outline">
          View All Projects
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </ScrollReveal>
    </section>
  )
}
