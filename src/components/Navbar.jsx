import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useScrollY } from '../hooks/useScrollY'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative text-sm font-medium text-ink-secondary dark:text-ink-secondary hover:text-ink-primary dark:hover:text-ink-primary transition-colors duration-200"
      style={{ color: 'inherit' }}
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  )
}

export default function Navbar() {
  const scrollY = useScrollY()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const scrolled = scrollY > 40

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const bg = theme === 'dark' ? '#0a0a0a' : '#f5f4f0'
  const textPrimary = theme === 'dark' ? '#f0efe8' : '#1a1a17'
  const textSecondary = theme === 'dark' ? '#8a8a7e' : '#5a5a52'

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? (theme === 'dark' ? 'rgba(10,10,10,0.88)' : 'rgba(245,244,240,0.88)') : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${theme === 'dark' ? '#1e1e1e' : '#d4d3cc'}` : '1px solid transparent',
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-xl font-semibold tracking-tight"
            style={{ color: textPrimary }}
          >
            MD
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex" style={{ color: textSecondary }}>
            {NAV_LINKS.map(link => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 transition-colors duration-200"
              style={{
                color: textSecondary,
                backgroundColor: 'transparent',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun size={16} />
                : <Moon size={16} />
              }
            </button>

            {/* Mobile hamburger */}
            <button
              className="rounded-full p-2 md:hidden"
              style={{ color: textSecondary }}
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed right-0 top-0 z-50 h-full w-72 flex flex-col px-8 py-8"
              style={{
                backgroundColor: theme === 'dark' ? '#111111' : '#ebebE4',
                borderLeft: `1px solid ${theme === 'dark' ? '#1e1e1e' : '#d4d3cc'}`,
              }}
            >
              <div className="flex justify-end mb-10">
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ color: textSecondary }}
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-8">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-2xl font-semibold tracking-tight transition-colors duration-200"
                    style={{ color: textPrimary }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
