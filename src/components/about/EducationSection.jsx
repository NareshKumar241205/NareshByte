import ScrollReveal from '../shared/ScrollReveal'
import TextReveal from '../shared/TextReveal'
import { education } from '../../data/education'
import './EducationSection.css'

export default function EducationSection() {
  return (
    <div className="education-section">
      <ScrollReveal preset="reveal">
        <TextReveal as="h2" className="section-heading">Education</TextReveal>
      </ScrollReveal>

      <ScrollReveal preset="scaleIn" delay={0.1} as="div">
        <div className="education-row">
          {education.map((item) => (
            <div key={item.id} className="education-card glass">
              {item.image && (
                <div className="education-card-image">
                  <img
                    src={item.image}
                    alt={`${item.school}`}
                    width="400"
                    height="200"
                    loading="lazy"
                  />
                </div>
              )}
              <span className="education-period">{item.period}</span>
              <h4 className="education-degree">{item.degree}</h4>
              <p className="education-school">{item.school}</p>
              <p className="education-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  )
}
