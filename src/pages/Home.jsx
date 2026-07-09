import Hero from '../components/home/Hero'
import HomeBio from '../components/home/HomeBio'
import Services from '../components/home/Services'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Stats from '../components/home/Stats'
import CTAStrip from '../components/home/CTAStrip'
import SectionDivider from '../components/shared/SectionDivider'
import SEO from '../components/shared/SEO'

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="AI/ML Engineer — building intelligent systems that bridge research and production. View projects, skills, and experience."
      />
      <Hero />
      <div className="page-container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <HomeBio />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <FeaturedProjects />
        <SectionDivider />
        <Stats />
        <SectionDivider />
        <CTAStrip />
      </div>
    </>
  )
}
