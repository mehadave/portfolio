import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const statItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const STATS = [
  { value: '5+', label: 'Years Experience' },
  { value: '12+', label: 'Projects Shipped' },
  { value: '8', label: 'Happy Clients' },
]

export default function About() {
  const { theme } = useTheme()
  const textPrimary = theme === 'dark' ? '#f0efe8' : '#1a1a17'
  const textSecondary = theme === 'dark' ? '#8a8a7e' : '#5a5a52'
  const surfaceBg = theme === 'dark' ? '#111111' : '#ebebE4'
  const borderColor = theme === 'dark' ? '#1e1e1e' : '#d4d3cc'

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: '#c9a84c' }}>
            01 — About
          </span>
          <span className="h-px flex-1" style={{ backgroundColor: borderColor }} />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Photo + bio */}
          <div className="flex flex-col gap-8">
            {/* Photo placeholder */}
            <div className="relative w-fit">
              <div
                className="h-64 w-56 rounded-2xl"
                style={{
                  backgroundColor: surfaceBg,
                  border: `1px solid ${borderColor}`,
                }}
              />
              {/* Offset border accent */}
              <div
                className="absolute -bottom-3 -right-3 h-64 w-56 rounded-2xl"
                style={{ border: `1px solid #c9a84c`, opacity: 0.4, zIndex: -1 }}
              />
              {/* Initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-5xl font-semibold" style={{ color: textSecondary, opacity: 0.3 }}>
                  MD
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center gap-6">
            <h2 className="font-serif text-4xl font-semibold leading-tight" style={{ color: textPrimary }}>
              I turn complex problems into<br />
              <span style={{ fontStyle: 'italic', color: '#c9a84c' }}>clean, lasting software.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: textSecondary }}>
              I'm a Senior Product Engineer with five years of experience building consumer-facing products end-to-end. I care about the full picture — system architecture, product thinking, and interface craft — and I work best when those concerns are treated as one.
            </p>
            <p className="text-base leading-relaxed" style={{ color: textSecondary }}>
              My recent work spans personal CRMs, habit-tracking apps, and e-commerce platforms. I'm drawn to products that help people build better habits, relationships, and routines.
            </p>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {STATS.map(stat => (
            <motion.div
              key={stat.label}
              variants={statItem}
              className="rounded-xl p-8"
              style={{
                backgroundColor: surfaceBg,
                border: `1px solid ${borderColor}`,
              }}
            >
              <p className="font-serif text-5xl font-semibold" style={{ color: '#c9a84c' }}>
                {stat.value}
              </p>
              <p className="mt-2 text-sm" style={{ color: textSecondary }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
