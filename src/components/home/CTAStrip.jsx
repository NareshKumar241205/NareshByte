import { Link } from 'react-router-dom'
import ScrollReveal from '../shared/ScrollReveal'
import TextReveal from '../shared/TextReveal'
import MagneticElement from '../shared/MagneticElement'
import './CTAStrip.css'

export default function CTAStrip() {
  return (
    <section className="cta-strip">
      <ScrollReveal preset="clipReveal" as="div" className="cta-strip-content glass">
        <TextReveal as="h2" className="cta-strip-heading">Let&apos;s build something together</TextReveal>
        <p className="cta-strip-desc">
          Whether you have a project in mind, a research collaboration, or just
          want to connect — I&apos;d love to hear from you.
        </p>
        <MagneticElement strength={0.2}>
          <Link to="/contact" className="btn-primary">
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </MagneticElement>
      </ScrollReveal>
    </section>
  )
}
