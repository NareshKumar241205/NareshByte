import AboutHero from '../components/about/AboutHero'
import Bio from '../components/about/Bio'
import TechStack from '../components/about/TechStack'
import ExperiencePreview from '../components/about/ExperiencePreview'
import EducationSection from '../components/about/EducationSection'
import SEO from '../components/shared/SEO'

export default function About() {
  return (
    <div className="page-container">
      <SEO
        title="About"
        description="Learn more about my background, skills, and approach to building intelligent systems."
      />
      <AboutHero />
      <Bio />
      <TechStack />
      <ExperiencePreview />
      <EducationSection />
    </div>
  )
}
