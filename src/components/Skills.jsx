import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Supabase'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Vercel', 'Figma', 'Linear', 'Postman'],
  },
]

const pillVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const groupVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

export default function Skills() {
  const { theme } = useTheme()
  const textPrimary = theme === 'dark' ? '#f0efe8' : '#1a1a17'
  const textSecondary = theme === 'dark' ? '#8a8a7e' : '#5a5a52'
  const surfaceBg = theme === 'dark' ? '#111111' : '#ebebE4'
  const borderColor = theme === 'dark' ? '#1e1e1e' : '#d4d3cc'

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mb-12 flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: '#c9a84c' }}>
            03 — Stack
          </span>
          <span className="h-px flex-1" style={{ backgroundColor: borderColor }} />
        </div>

        <h2 className="mb-16 font-serif text-4xl font-semibold leading-tight md:text-5xl" style={{ color: textPrimary }}>
          Tools of the craft.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
          >
            <h3 className="mb-6 font-serif text-xl font-semibold" style={{ color: textPrimary }}>
              <span style={{ color: '#c9a84c' }}>—</span> {group.title}
            </h3>
            <motion.ul
              variants={groupVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-wrap gap-2"
            >
              {group.skills.map(s => (
                <motion.li
                  key={s}
                  variants={pillVariants}
                  className="rounded-full px-4 py-2 text-sm transition-colors duration-200 hover:text-ink-primary"
                  style={{
                    backgroundColor: surfaceBg,
                    border: `1px solid ${borderColor}`,
                    color: textSecondary,
                  }}
                >
                  {s}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
