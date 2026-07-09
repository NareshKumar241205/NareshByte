import { Link } from 'react-router-dom'
import ScrollReveal from '../shared/ScrollReveal'
import TextReveal from '../shared/TextReveal'
import './Bio.css'

export default function Bio() {
  return (
    <div className="bio">
      <ScrollReveal preset="reveal" as="div" className="bio-text">
        <TextReveal as="h2" className="section-heading">My Journey</TextReveal>
        <p>
          I&apos;m an AI/ML Engineer with a deep passion for building intelligent
          systems that make a real impact. My work spans the full spectrum — from
          training transformer models to deploying production-grade APIs on cloud
          infrastructure.
        </p>
        <p>
          I believe in clean, maintainable code and data-driven decision making.
          When I&apos;m not training models or optimizing pipelines, you&apos;ll
          find me exploring new research papers, contributing to open-source, or
          mentoring aspiring engineers.
        </p>
        <div className="bio-actions">
          <Link to="/projects" className="btn-primary">View My Work</Link>
          <a href="/resume.pdf" className="btn-outline" target="_blank" rel="noopener noreferrer">
            Download Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/nareshkumar241205/" className="btn-outline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal preset="scaleIn" delay={0.1} as="div" className="bio-visual">
        <div className="bio-initials">NK</div>
      </ScrollReveal>
    </div>
  )
}
