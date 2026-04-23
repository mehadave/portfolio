import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './context/ThemeContext'

export default function App() {
  const { theme } = useTheme()

  // Intercept in-page hash links: smooth-scroll without polluting the URL with #fragments.
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href === '#') return
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
    document.addEventListener('click', handler)
    // Strip any hash that's already in the URL on load
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-bg-primary dark:bg-bg-primary" style={{ backgroundColor: theme === 'dark' ? '#0a0a0a' : '#f5f4f0' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
