import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Naresh Kumar V'
const DEFAULT_DESCRIPTION = 'AI/ML Engineer — building intelligent systems that bridge research and production.'

export default function SEO({ title, description }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
  const desc = description || DEFAULT_DESCRIPTION
  const canonical = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  )
}
