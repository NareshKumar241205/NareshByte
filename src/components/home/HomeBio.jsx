import { Link } from 'react-router-dom'
import ScrollReveal from '../shared/ScrollReveal'
import TextReveal from '../shared/TextReveal'
import './HomeBio.css'

export default function HomeBio() {
  return (
    <div className="home-bio">
      <ScrollReveal preset="fadeUp" as="div" className="home-bio-content">
        <TextReveal as="h2" className="section-heading">Who I Am</TextReveal>
        <p className="home-bio-text">
          AI/ML Engineer passionate about building intelligent systems that bridge
          research and production. I architect end-to-end ML solutions — from
          training transformer models to deploying resilient APIs on cloud
          infrastructure.
        </p>
        <div className="home-bio-skills">
          <span className="home-bio-chip">PyTorch</span>
          <span className="home-bio-chip">FastAPI</span>
          <span className="home-bio-chip">AWS SageMaker</span>
          <span className="home-bio-chip">Docker</span>
        </div>
        <Link to="/about" className="home-bio-link">
          Read more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </ScrollReveal>

      <ScrollReveal preset="distort" as="div" className="home-bio-visual">
        <div className="home-bio-initials">NK</div>
      </ScrollReveal>
    </div>
  )
}
