import ScrollReveal from '../shared/ScrollReveal'
import TextReveal from '../shared/TextReveal'
import MagneticElement from '../shared/MagneticElement'
import './Services.css'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5-4 8-10 8-4 0-8-3-10-8 2-5 6-10 10-10z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 6v2" /><path d="M12 16v2" /><path d="M6 12H4" /><path d="M20 12h-2" />
      </svg>
    ),
    title: 'Machine Learning',
    description: 'End-to-end ML pipelines — from data exploration and model training to deployment and monitoring in production environments.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Backend & APIs',
    description: 'Scalable RESTful and real-time APIs using FastAPI, Node.js, and cloud-native architectures with containerized deployments.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Full-Stack Development',
    description: 'End-to-end web applications with modern frontends, robust backends, and seamless cloud integration for production readiness.',
  },
]

export default function Services() {
  return (
    <section className="services">
      <ScrollReveal preset="distort" as="div" className="services-header">
        <TextReveal as="h2" className="section-heading">What I Do</TextReveal>
        <div className="accent-line" />
        <p className="section-sub">
          Bridging machine learning research with production engineering to deliver
          intelligent, scalable solutions.
        </p>
      </ScrollReveal>

      <div className="services-grid">
        {services.map((s, i) => (
          <ScrollReveal
            key={s.title}
            preset="clipReveal"
            delay={i * 0.15}
            as="div"
            className="services-card glass"
          >
            <MagneticElement strength={0.15}>
              <div className="services-icon">{s.icon}</div>
            </MagneticElement>
            <h3 className="services-title">{s.title}</h3>
            <p className="services-desc">{s.description}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
