export default function V3Editorial() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0efe8]">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur border-b border-[#1e1e1e]" style={{ backgroundColor: 'rgba(10,10,10,0.88)' }}>
        <span className="font-serif text-xl font-semibold" style={{ fontFamily: '"Playfair Display", serif' }}>MD</span>
        <div className="flex gap-8 text-sm text-[#8a8a7e]">
          <span>About</span><span>Work</span><span>Skills</span><span>Contact</span>
        </div>
      </nav>

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-12 bg-[#c9a84c]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#c9a84c]">Available for work</span>
          <span className="h-px w-12 bg-[#c9a84c]" />
        </div>
        <h1 className="font-serif text-8xl font-semibold leading-[1.08]" style={{ fontFamily: '"Playfair Display", serif' }}>
          Meha Dave.
        </h1>
        <p className="mt-6 text-2xl font-light text-[#8a8a7e]">Senior Product Engineer</p>
        <p className="mt-4 max-w-xl text-sm text-[#8a8a7e]">
          I build consumer software that's as beautiful as it is functional — from the first line of architecture to the last pixel of UI.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-[#c9a84c] px-7 py-3 text-sm font-medium text-[#0a0a0a]">View Work</button>
          <button className="rounded-full border border-[#252525] px-7 py-3 text-sm text-[#8a8a7e]">Contact Me</button>
        </div>
      </section>
    </div>
  )
}
