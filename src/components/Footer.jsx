import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  const textMuted = theme === 'dark' ? '#4e4e48' : '#9a9a90'
  const borderColor = theme === 'dark' ? '#1e1e1e' : '#d4d3cc'
  const year = new Date().getFullYear()

  return (
    <footer
      className="mx-auto max-w-6xl px-6 py-10"
      style={{ borderTop: `1px solid ${borderColor}` }}
    >
      <div className="flex flex-col items-center justify-between gap-4 text-xs sm:flex-row" style={{ color: textMuted }}>
        <p className="font-serif italic">Meha Dave</p>
        <p>© {year} — All rights reserved.</p>
      </div>
    </footer>
  )
}
