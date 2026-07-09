import { Link } from 'react-router-dom'
import SEO from '../components/shared/SEO'

export default function NotFound() {
  return (
    <div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
      <SEO title="404" description="Page not found." />
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '6rem', fontWeight: 700, color: 'var(--accent)', marginBottom: 16, lineHeight: 1 }}>404</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: 32 }}>
        Page not found
      </p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  )
}
