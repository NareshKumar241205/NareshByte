import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { VscCode } from 'react-icons/vsc'
import ScrollReveal from '../shared/ScrollReveal'
import TextReveal from '../shared/TextReveal'
import {
  siPython,
  siC,
  siCplusplus,
  siJavascript,
  siReact,
  siHtml5,
  siCss,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siSocketdotio,
  siMongodb,
  siPostgresql,
  siPytorch,
  siTensorflow,
  siScikitlearn,
  siNumpy,
  siPandas,
  siGit,
  siGithub,
  siDocker,
  siLinux,
  siKaggle,
  siAnaconda,
  siArduino,
} from 'simple-icons'
import './TechStack.css'

const categories = [
  {
    key: 'languages',
    label: 'Languages',
    items: [
      { name: 'Python', icon: siPython },
      { name: 'C', icon: siC },
      { name: 'C++', icon: siCplusplus },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'SQL', text: 'SQL' },
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React.js', icon: siReact },
      { name: 'HTML5', icon: siHtml5 },
      { name: 'CSS3', icon: siCss },
      { name: 'Tailwind CSS', icon: siTailwindcss },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: siNodedotjs },
      { name: 'Express.js', icon: siExpress },
      { name: 'Socket.IO', icon: siSocketdotio },
      { name: 'REST APIs', text: 'REST' },
      { name: 'JWT Auth', text: 'JWT' },
    ],
  },
  {
    key: 'databases',
    label: 'Databases',
    items: [
      { name: 'MongoDB', icon: siMongodb },
      { name: 'PostgreSQL', icon: siPostgresql },
    ],
  },
  {
    key: 'ai-ml',
    label: 'AI/ML',
    items: [
      { name: 'PyTorch', icon: siPytorch },
      { name: 'TensorFlow', icon: siTensorflow },
      { name: 'Scikit-learn', icon: siScikitlearn },
      { name: 'NumPy', icon: siNumpy },
      { name: 'Pandas', icon: siPandas },
    ],
  },
  {
    key: 'tools',
    label: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub },
      { name: 'VS Code', reactIcon: VscCode },
      { name: 'Docker', icon: siDocker },
      { name: 'Linux', icon: siLinux },
      { name: 'Kaggle', icon: siKaggle },
      { name: 'Anaconda', icon: siAnaconda },
    ],
  },
  {
    key: 'embedded',
    label: 'Embedded Systems',
    items: [
      { name: 'Arduino', icon: siArduino },
      { name: 'ESP32', text: 'ESP32' },
    ],
  },
]

const tabs = [{ key: 'all', label: 'All' }, ...categories.map((c) => ({ key: c.key, label: c.label }))]

const tabContent = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

function IconCard({ item }) {
  if (item.text) {
    return (
      <div className="tech-icon-card">
        <div className="tech-icon-text">{item.text}</div>
        <span className="tech-icon-label">{item.name}</span>
      </div>
    )
  }

  if (item.reactIcon) {
    const ReactIcon = item.reactIcon
    return (
      <div className="tech-icon-card">
        <div className="tech-icon">
          <ReactIcon size={32} aria-hidden="true" />
        </div>
        <span className="tech-icon-label">{item.name}</span>
      </div>
    )
  }

  return (
    <div className="tech-icon-card">
      <div className="tech-icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d={item.icon.path} />
        </svg>
      </div>
      <span className="tech-icon-label">{item.name}</span>
    </div>
  )
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('all')

  const visibleCategories = activeTab === 'all'
    ? categories
    : categories.filter((c) => c.key === activeTab)

  return (
    <div className="tech-stack-section">
      <ScrollReveal preset="reveal">
        <TextReveal as="h2" className="section-heading">What I Work With</TextReveal>
      </ScrollReveal>

      <div className="tech-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tech-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="tech-content"
          variants={tabContent}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.25 }}
        >
          {activeTab === 'all' ? (
            <div className="tech-icons-grid">
              {categories.flatMap((cat) =>
                cat.items.map((item) => (
                  <IconCard key={item.name} item={item} />
                ))
              )}
            </div>
          ) : (
            visibleCategories.map((cat) => (
              <div key={cat.key} className="tech-category">
                <div className="tech-icons-grid">
                  {cat.items.map((item) => (
                    <IconCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
