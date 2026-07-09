import ContactForm from '../components/contact/ContactForm'
import SEO from '../components/shared/SEO'

export default function Contact() {
  return (
    <div className="page-container">
      <SEO
        title="Contact"
        description="Get in touch — I'd love to hear about your project, research idea, or just say hello."
      />
      <ContactForm />
    </div>
  )
}
