import ScrollReveal from '../shared/ScrollReveal'
import experience from '../../data/experience'
import '../experience/Timeline.css'

const previewItems = experience.slice(0, 3)

export default function ExperiencePreview() {
  return (
    <div className="experience-preview">
      <ScrollReveal preset="reveal">
        <div className="experience-preview-header">
          <h2 className="section-heading">Experience</h2>
          <a href="/experience" className="experience-view-all">
            View Full History
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </ScrollReveal>

      <div className="timeline">
        {previewItems.map((item, i) => (
          <ScrollReveal
            key={item.id}
            preset="slideLeft"
            delay={i * 0.12}
            as="div"
            className="timeline-item"
          >
            <div className="timeline-dot" />
            <div className="timeline-card glass">
              <span className="timeline-period">{item.period}</span>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
