import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const SOCIALS = [
  { icon: Github, href: 'https://github.com/mehadave', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/meha-dave/', label: 'LinkedIn' },
]

const EMAIL = 'mehadave2@gmail.com'

export default function Contact() {
  const { theme } = useTheme()
  const textPrimary = theme === 'dark' ? '#f0efe8' : '#1a1a17'
  const textSecondary = theme === 'dark' ? '#8a8a7e' : '#5a5a52'
  const borderColor = theme === 'dark' ? '#1e1e1e' : '#d4d3cc'

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-12 flex items-center gap-4 w-full">
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: '#c9a84c' }}>
            04 — Contact
          </span>
          <span className="h-px flex-1" style={{ backgroundColor: borderColor }} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-sm uppercase tracking-[0.3em]"
          style={{ color: '#c9a84c' }}
        >
          Let's talk
        </motion.p>

        <h2
          className="max-w-3xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl"
          style={{ color: textPrimary }}
        >
          Have an idea worth<br />
          <span style={{ fontStyle: 'italic', color: '#c9a84c' }}>building?</span>
        </h2>

        <p className="mt-8 max-w-xl text-base leading-relaxed" style={{ color: textSecondary }}>
          I'm currently taking on select freelance work and long-term engagements. If you're building something thoughtful, I'd love to hear about it.
        </p>

        {/* Email display */}
        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 font-serif text-xl font-medium transition-colors duration-200 md:text-2xl"
          style={{ color: textPrimary, textDecoration: 'underline', textUnderlineOffset: '8px', textDecorationColor: '#c9a84c' }}
        >
          {EMAIL}
        </a>

        {/* CTA button */}
        <motion.a
          href={`mailto:${EMAIL}`}
          whileHover={{ scale: 1.02, boxShadow: '0 0 0 1px #c9a84c' }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium"
          style={{
            backgroundColor: '#c9a84c',
            color: '#0a0a0a',
          }}
        >
          <Mail size={16} />
          Send a Message
        </motion.a>

        {/* Social icons */}
        <div className="mt-16 flex items-center gap-2">
          {SOCIALS.map(s => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: '#c9a84c' }}
              transition={{ duration: 0.2 }}
              aria-label={s.label}
              className="rounded-full p-3 transition-colors duration-200"
              style={{
                color: textSecondary,
                border: `1px solid ${borderColor}`,
              }}
            >
              <s.icon size={18} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
