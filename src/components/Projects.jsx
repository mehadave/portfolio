import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const PROJECTS = [
  {
    title: 'Touchbase',
    tagline: 'Personal CRM for people who care.',
    description:
      'A relationship manager that surfaces smart reminders to follow up before you lose touch. Tracks interaction history, contact context, and cadence — built for people who value connection but forget to reach out.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    live: 'https://touchbase-three.vercel.app',
    repo: 'https://github.com/mehadave/Touchbase',
    year: '2026',
  },
  {
    title: 'Habitat',
    tagline: 'A habit tracker that actually works.',
    description:
      'Designed around momentum, not guilt. Build streaks, visualize progress, and develop routines that stick. Minimal interface, zero friction — the anti-dopamine habit app.',
    tech: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
    live: 'https://habitat-black.vercel.app',
    repo: 'https://github.com/mehadave/habitat',
    year: '2026',
  },
  {
    title: 'Flashify',
    tagline: 'E-commerce at 20-minute speed.',
    description:
      'An e-commerce platform engineered for instant delivery. Smart order routing, real-time inventory sync, and a checkout flow that ships your order before you finish your coffee.',
    tech: ['React', 'Express', 'MongoDB', 'Redis'],
    live: null,
    repo: 'https://github.com/mehadave/Flashify',
    year: '2024',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function ProjectCard({ project, theme }) {
  const textPrimary = theme === 'dark' ? '#f0efe8' : '#1a1a17'
  const textSecondary = theme === 'dark' ? '#8a8a7e' : '#5a5a52'
  const surfaceBg = theme === 'dark' ? '#111111' : '#ebebE4'
  const borderColor = theme === 'dark' ? '#1e1e1e' : '#d4d3cc'

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.02, borderColor: '#c9a84c' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative flex flex-col overflow-hidden rounded-2xl p-8"
      style={{
        backgroundColor: surfaceBg,
        border: `1px solid ${borderColor}`,
      }}
    >
      {/* Header: year + links */}
      <div className="mb-10 flex items-start justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: textSecondary }}>
          {project.year}
        </span>
        <div className="flex items-center gap-2 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="rounded-full p-2 transition-colors duration-200"
              style={{ color: textSecondary }}
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live site"
              className="rounded-full p-2 transition-colors duration-200"
              style={{ color: textSecondary }}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-serif text-3xl font-semibold leading-tight" style={{ color: textPrimary }}>
        {project.title}
      </h3>
      <p className="mt-2 text-sm italic" style={{ color: '#c9a84c' }}>
        {project.tagline}
      </p>

      {/* Description */}
      <p className="mt-6 text-sm leading-relaxed" style={{ color: textSecondary }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span
            key={t}
            className="rounded-full px-3 py-1 text-xs"
            style={{
              border: `1px solid ${borderColor}`,
              color: textSecondary,
              backgroundColor: theme === 'dark' ? '#0a0a0a' : '#f5f4f0',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Hover CTA */}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
          style={{ color: '#c9a84c' }}
        >
          View live
          <ArrowUpRight size={14} />
        </a>
      )}
    </motion.article>
  )
}

export default function Projects() {
  const { theme } = useTheme()
  const textPrimary = theme === 'dark' ? '#f0efe8' : '#1a1a17'
  const textSecondary = theme === 'dark' ? '#8a8a7e' : '#5a5a52'
  const borderColor = theme === 'dark' ? '#1e1e1e' : '#d4d3cc'

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: '#c9a84c' }}>
            02 — Selected Work
          </span>
          <span className="h-px flex-1" style={{ backgroundColor: borderColor }} />
        </div>

        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl" style={{ color: textPrimary }}>
            Recent projects.
          </h2>
          <p className="max-w-md text-base leading-relaxed" style={{ color: textSecondary }}>
            A small selection of products I've designed, built, and shipped. Each represents an opinion about how software should feel.
          </p>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS.map(p => (
          <ProjectCard key={p.title} project={p} theme={theme} />
        ))}
      </motion.div>
    </section>
  )
}
