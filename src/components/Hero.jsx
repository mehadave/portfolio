import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const { theme } = useTheme()
  const textPrimary = theme === 'dark' ? '#f0efe8' : '#1a1a17'
  const textSecondary = theme === 'dark' ? '#8a8a7e' : '#5a5a52'

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* Subtle grid lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: theme === 'dark'
            ? 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)'
            : 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl"
      >
        {/* Eyebrow */}
        <motion.div variants={item} className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-12" style={{ backgroundColor: '#c9a84c' }} />
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: '#c9a84c' }}>
            Available for work
          </span>
          <span className="h-px w-12" style={{ backgroundColor: '#c9a84c' }} />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-serif text-6xl font-semibold leading-[1.08] tracking-tight sm:text-7xl md:text-8xl"
          style={{ color: textPrimary }}
        >
          Meha Dave.
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="mt-6 text-xl font-light leading-relaxed sm:text-2xl"
          style={{ color: textSecondary }}
        >
          Senior Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-base leading-relaxed"
          style={{ color: textSecondary, opacity: 0.75 }}
        >
          I build consumer software that's as beautiful as it is functional — from the first line of architecture to the last pixel of UI.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center rounded-full px-7 py-3 text-sm font-medium transition-colors duration-200"
            style={{
              backgroundColor: '#c9a84c',
              color: '#0a0a0a',
            }}
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center rounded-full px-7 py-3 text-sm font-medium transition-colors duration-200"
            style={{
              border: `1px solid ${theme === 'dark' ? '#252525' : '#d4d3cc'}`,
              color: textSecondary,
              backgroundColor: 'transparent',
            }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: textSecondary, opacity: 0.4 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
