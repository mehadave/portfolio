import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

const PROJECTS = [
  {
    n: '01',
    title: 'Touchbase',
    tagline: 'Personal CRM for people who care.',
    description:
      'A relationship manager that surfaces smart reminders to follow up before you lose touch. Tracks interaction history, contact context, and cadence.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    live: 'https://touchbase-three.vercel.app',
    repo: 'https://github.com/mehadave/Touchbase',
    year: '2026',
    tint: 'rgba(201,168,76,0.18)',
  },
  {
    n: '02',
    title: 'Habitat',
    tagline: 'A habit tracker that actually works.',
    description:
      'Designed around momentum, not guilt. Build streaks, visualize progress, and develop routines that stick. Minimal interface, zero friction.',
    tech: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
    live: 'https://habitat-black.vercel.app',
    repo: 'https://github.com/mehadave/habitat',
    year: '2026',
    tint: 'rgba(104,148,188,0.15)',
  },
  {
    n: '03',
    title: 'Flashify',
    tagline: 'E-commerce at 20-minute speed.',
    description:
      'An e-commerce platform engineered for instant delivery. Smart order routing, real-time inventory sync, checkout that ships before your coffee.',
    tech: ['React', 'Express', 'MongoDB', 'Redis'],
    live: null,
    repo: 'https://github.com/mehadave/Flashify',
    year: '2024',
    tint: 'rgba(188,104,104,0.15)',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 300, damping: 25 })
  const sy = useSpring(my, { stiffness: 300, damping: 25 })

  const handleMove = e => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-colors duration-500"
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
      data-cursor="view"
    >
      {/* Cursor-tracking tint */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${sx.get()}px ${sy.get()}px, ${project.tint}, transparent 60%)`,
        }}
      />
      {/* Recalculated via motion values */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mx) var(--my), ${project.tint}, transparent 60%)`,
        }}
      />

      {/* Header */}
      <div className="relative mb-12 flex items-start justify-between">
        <div className="flex items-baseline gap-3">
          <span className="eyebrow text-accent">/ {project.n}</span>
          <span className="font-mono-editorial text-[10px] text-ink-dim">{project.year}</span>
        </div>
        <div className="flex items-center gap-1">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" aria-label="Repo"
              className="rounded-full p-2 text-ink-muted transition-colors hover:text-accent"
              data-cursor="link"
            >
              <Github size={14} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live"
              className="rounded-full p-2 text-ink-muted transition-colors hover:text-accent"
              data-cursor="link"
            >
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Title + tagline */}
      <h3 className="relative font-serif-display text-3xl font-medium leading-tight text-ink md:text-4xl">
        {project.title}
      </h3>
      <p className="relative mt-2 text-sm italic text-accent">{project.tagline}</p>

      {/* Description */}
      <p className="relative mt-6 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="relative mt-8 flex flex-wrap gap-1.5">
        {project.tech.map(t => (
          <span
            key={t}
            className="rounded-full px-2.5 py-1 font-mono-editorial text-[10px] uppercase tracking-wider text-ink-muted"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom rule + CTA */}
      <div className="relative mt-8 flex items-center justify-between border-t pt-5" style={{ borderColor: 'var(--border)' }}>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ink transition-all group-hover:gap-2.5 group-hover:text-accent"
          >
            Visit live <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-ink-muted">In archive</span>
        )}
        <span className="font-mono-editorial text-[10px] text-ink-dim">case.study ↗</span>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mb-10 flex items-center gap-4">
          <span className="eyebrow text-accent">02 — Selected Work</span>
          <span className="h-px flex-1" style={{ backgroundColor: 'var(--border)' }} />
          <span className="eyebrow">{PROJECTS.length} Projects / 2024—26</span>
        </div>

        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-serif-display text-5xl font-medium leading-[1.05] text-ink md:text-7xl">
            Things I've<br />
            <span className="italic text-accent">shipped.</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-ink-muted">
            A small, honest selection. Each product below represents an opinion about how software should feel.
          </p>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
